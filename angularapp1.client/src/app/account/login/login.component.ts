import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { ILoginArgs } from '../../dto/accountDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public f_loading: boolean = false;
  public errMsg?: string;
  public infoMsg?: string;

  constructor(public authSvc: AuthService) { }

  handleSubmit(refForm: NgForm) {
    this.f_loading = true;
    this.errMsg = undefined;
    this.infoMsg = undefined;

    if (refForm.invalid) {
      this.errMsg = 'Invalid form';
      this.f_loading = false;
      return;
    }

    // Form is valid
    const loginArgs: ILoginArgs = {
      userId: refForm.value['userId'],
      credential: refForm.value['mima'],
      vcode: '123456'
    };

    this.authSvc.loginAsync(loginArgs);
  }
}
