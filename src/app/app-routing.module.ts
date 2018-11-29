import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AddMenuComponent} from './Menues/add-menu/add-menu.component';
import {LoginComponent} from './Login/login.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'menu-add', component: AddMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
