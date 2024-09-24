import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './account/login/login.component';
import { AuthComponent } from './account/auth/auth.component'
import { authGuard } from './auth.guard';
import { Demo001Component } from './demo/demo001/demo001.component'
import { Demo002Component } from './demo/demo002/demo002.component'
import { Demo003Component } from './demo/demo003/demo003.component'
import { Demo004Component } from './demo/demo004/demo004.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'demo001', component: Demo001Component, canActivate: [authGuard] },
  { path: 'demo002', component: Demo002Component, canActivate: [authGuard] },
  { path: 'demo003', component: Demo003Component, canActivate: [authGuard] },
  { path: 'demo004', component: Demo004Component, canActivate: [authGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
