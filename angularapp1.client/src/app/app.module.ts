import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { AuthComponent } from './account/auth/auth.component';
import { LoginComponent } from './account/login/login.component';
import { Demo001Component } from './demo/demo001/demo001.component';
import { Demo002Component } from './demo/demo002/demo002.component';
import { Demo003Component } from './demo/demo003/demo003.component';
import { Demo003CounterComponent } from './demo/demo003/demo003-counter/demo003-counter.component';
import { Demo004Component } from './demo/demo004/demo004.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PageNotFoundComponent } from './page-not-found.component';
import { Demo005Component } from './demo/demo005/demo005.component';
import { Demo005MyReactiveFormComponent } from './demo/demo005/demo005-my-reactive-form/demo005-my-reactive-form.component';
import { Demo005MyTemplateFormComponent } from './demo/demo005/demo005-my-template-form/demo005-my-template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    AuthComponent,
    LoginComponent,
    Demo001Component,
    Demo002Component,
    Demo003Component,
    Demo003CounterComponent,
    Demo004Component,
    PageNotFoundComponent,
    Demo005Component,
    Demo005MyReactiveFormComponent,
    Demo005MyTemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
