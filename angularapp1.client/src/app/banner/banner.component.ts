import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.css',
    standalone: true,
    imports: [RouterLink]
})
export class BannerComponent {
  constructor(public authSvc: AuthService) { }

  handleLogout() {
    this.authSvc.logoutAsync();
  }
}
