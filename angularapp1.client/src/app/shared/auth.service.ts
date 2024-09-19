import { Injectable } from '@angular/core';

enum AuthStatus {
  Guest = "Guest",
  Authing = "Authing",
  Authed = "Authed"
}

interface AccountState {
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

  constructor() { }  
}
