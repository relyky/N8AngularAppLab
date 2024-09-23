import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { formatISO } from 'date-fns'

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css',
    standalone: true
})
export class AuthComponent {
  public now: string = formatISO(new Date());

  constructor(public authSvc: AuthService) { }
}
