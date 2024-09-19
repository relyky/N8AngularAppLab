import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent ngOninit');
  }

  //title = 'AngularApp1.Client';
  title = '我的 AngularApp1';
}
