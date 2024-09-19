import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUserId: string = 'guest';
  private _loginUserName: string = '來賓';
  private _authToken?: string = undefined;

  get loginUserId(): string {
    return this._loginUserId;
  }

  get loginUserName(): string {
    return this._loginUserName;
  }

  constructor() { }
  
}
