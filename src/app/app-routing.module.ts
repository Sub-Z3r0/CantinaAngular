import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AddMenuComponent} from './Menues/add-menu/add-menu.component';
import {LoginComponent} from './Login/login.component';
import {AdminViewComponent} from "./admin-view/admin-view.component";
import {PopUpComponent} from "./Allergen/pop-up/pop-up.component";
import {AddWorkerComponent} from "./Workers/add-worker/add-worker.component";
import {SubmitFoodComponent} from './submit-food/submit-food.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'menu-add', component: AddMenuComponent },
  { path: 'adminview', component: AdminViewComponent },
  { path: 'adminview/addworker', component: AddWorkerComponent },
  { path: 'allergen', component: PopUpComponent },
  { path: 'submit-food', component: SubmitFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
