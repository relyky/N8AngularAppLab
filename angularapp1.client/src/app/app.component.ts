import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '我的 AngularApp1';

  constructor(private authSvc: AuthService) {
    console.log('AppComponent constructor');
  }

  async ngOnInit() {
    console.log('AppComponent ngOninit');
    await this.authSvc.getAntiForgeryTokenAsync();
  }
}
