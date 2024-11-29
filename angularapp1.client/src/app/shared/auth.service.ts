import { Injectable } from '@angular/core';
import { ILoginArgs, IAccessTokenResult, ILoginUserInfo } from '../dto/accountDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { formatISO } from 'date-fns';

enum AuthStatus {
  Guest = "Guest",
  Authing = "Authing",
  Authed = "Authed"
}

export interface AccountState {
  loginUserId: string
  loginUserName: string
  status: AuthStatus
  expiredTime?: Date
}

//-----------------------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUserId: string = '';
  private _loginUserName: string = '來賓';
  private _status: AuthStatus = AuthStatus.Guest;
  private _authToken?: string = undefined;
  private _expiredTime?: Date = undefined;

  get loginUserId(): string {
    return this._loginUserId;
  }

  get loginUserName(): string {
    return this._loginUserName;
  }

  get status(): string {
    return this._status;
  }

  get authToken(): string | undefined {
    return this._authToken;
  }

  get expiredTime(): Date | undefined {
    return this._expiredTime;
  }

  get isAuthed(): boolean {
    return this._status === AuthStatus.Authed && this._expiredTime && formatISO(this._expiredTime) > formatISO(new Date()) || false;
  }


  constructor(private http: HttpClient) { }

  async loginAsync(args: ILoginArgs) {
    try {
      this._status = AuthStatus.Authing;
      const tokenResult = await firstValueFrom(this.http.post<IAccessTokenResult>('api/Account/Login', args));

      const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenResult.authToken}`);
      const userInfo = await firstValueFrom(this.http.post<ILoginUserInfo>('api/Account/GetLoginUser', null, { headers }));

      // setup auth status
      this._loginUserId = userInfo.loginUserId;
      this._loginUserName = userInfo.loginUserName;
      this._status = AuthStatus.Authed;
      this._authToken = tokenResult.authToken;
      this._expiredTime = tokenResult.expiredTime;
    }
    catch (err) {
      console.error('登入失敗！', err);

      // reset auth status
      this._loginUserId = '';
      this._loginUserName = '來賓';
      this._status = AuthStatus.Guest;
      this._authToken = undefined;
      this._expiredTime = undefined;

      //if (err instanceof ResponseError)
      //  alert(`登入失敗！ ${err.status} ${err.statusText}`);

      throw err; //※一定要 throw 否則將判定為成功。
    }
  }

  async logoutAsync() {
    this._status = AuthStatus.Authing;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this._authToken}`);
    await firstValueFrom(this.http.post('api/Account/Logout', null, { headers }));

    // 不論登出成功與否，都要 reset auth status
    // reset auth status
    this._loginUserId = '';
    this._loginUserName = '來賓';
    this._status = AuthStatus.Guest;
    this._authToken = undefined;
    this._expiredTime = undefined;
  }

  //getAntiForgeryToken(): void {
  //  this.http.post<{ token: string }>('/api/Account/GetAntiForgeryToken', null)
  //    .subscribe(response => {
  //      localStorage.setItem('X-CSRF-TOKEN', response.token);
  //    });
  //}

  async getAntiForgeryTokenAsync(): Promise<void> {
    const response = await firstValueFrom(this.http.post<{ token: string }>('api/Account/GetAntiForgeryToken', null));    
    localStorage.setItem('X-CSRF-TOKEN', response.token);
    console.log('getAntiForgeryTokenAsync', 'got anti');
  }
}
