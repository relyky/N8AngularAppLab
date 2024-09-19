import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private http: HttpClient, public authSvc: AuthService) {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent ngOninit');
  }

  //title = 'AngularApp1.Client';
  title = '我的 AngularApp1';
}
