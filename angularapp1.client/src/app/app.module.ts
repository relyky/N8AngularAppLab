import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './account/auth/auth.component';
import { LoginComponent } from './account/login/login.component';
import { Demo001Component } from './demo/demo001/demo001.component';
import { Demo002Component } from './demo/demo002/demo002.component';
import { Demo003Component } from './demo/demo003/demo003.component';
import { Demo003CounterComponent } from './demo/demo003/demo003-counter/demo003-counter.component';
import { Demo004Component } from './demo/demo004/demo004.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    Demo001Component,
    Demo002Component,
    Demo003Component,
    Demo003CounterComponent,
    Demo004Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
