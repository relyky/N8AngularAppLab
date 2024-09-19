import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface IAccessTokenResult {
  expiredTime: Date;
  authToken: string;
}

export interface ILoginArgs {
  userId: string;
  credential: string;
  vcode: string;
}

export interface ILoginUserInfo {
  loginUserId: string;
  loginUserName: string;
  expiredTime: Date;
}

//--------------------------------------------------------

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public f_loading: boolean = false;
  public errMsg?: string;
  public infoMsg?: string;

  handleSubmit(refForm: NgForm) {
    this.f_loading = true;
    this.errMsg = undefined;
    this.infoMsg = undefined;
    if (refForm.invalid) {
      this.errMsg = 'Invalid form';
      this.f_loading = false;
      return;
    }

    else {
      this.infoMsg = 'Form is valid';
      this.f_loading = false;
    }
  }
}
