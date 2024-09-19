import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { Demo001Component } from './demo/demo001/demo001.component'
import { Demo002Component } from './demo/demo002/demo002.component'
import { Demo003Component } from './demo/demo003/demo003.component'
import { Demo004Component } from './demo/demo004/demo004.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'demo001', component: Demo001Component },
  { path: 'demo002', component: Demo002Component },
  { path: 'demo003', component: Demo003Component },
  { path: 'demo004', component: Demo004Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
