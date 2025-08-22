import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { TipsComponent } from './components/tips/tips.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tips', component: TipsComponent },
  { path: '', redirectTo: '/tips', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
