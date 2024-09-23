import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './account/login/login.component';
import { AuthComponent } from './account/auth/auth.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'demo001', loadComponent: () => import('./demo/demo001/demo001.component').then(m => m.Demo001Component) },
  { path: 'demo002', loadComponent: () => import('./demo/demo002/demo002.component').then(m => m.Demo002Component) },
  { path: 'demo003', loadComponent: () => import('./demo/demo003/demo003.component').then(m => m.Demo003Component) },
  { path: 'demo004', loadComponent: () => import('./demo/demo004/demo004.component').then(m => m.Demo004Component) },
  { path: 'demo005', loadComponent: () => import('./demo/demo005/demo005.component').then(m => m.Demo005Component) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
