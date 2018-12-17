import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AddMenuComponent} from './Menues/add-menu/add-menu.component';
import {PopUpComponent} from './Allergen/pop-up/pop-up.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {AddWorkerComponent} from './Workers/add-worker/add-worker.component';
import {SubmitFoodComponent} from './submit-food/submit-food.component';
import {ChooseMainPageItemsComponent} from './choose-main-page-items/choose-main-page-items.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchBoxComponent} from './search-box/search-box.component';
import {AddSpecieloffersComponent} from './add-specieloffers/add-specieloffers.component';
import {MenuUpdateComponent} from './specialOffers-update/menu-update.component';
import {UpdateMenuComponent} from './Menues/update-menu/update-menu.component';
import {AuthGuard} from './_guards/auth.guard';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'menu-add', component: AddMenuComponent, canActivate: [AuthGuard]},
  { path: 'adminview', component: AdminViewComponent , canActivate: [AuthGuard]},
  { path: 'search', component: SearchBoxComponent , canActivate: [AuthGuard]},
  { path: 'add-specielOffers', component: AddSpecieloffersComponent , canActivate: [AuthGuard]},
  { path: 'menu-update/:id', component: MenuUpdateComponent, canActivate: [AuthGuard]},
  { path: 'update-mainfood/:id', component: UpdateMenuComponent, canActivate: [AuthGuard]},
  { path: 'adminview/addworker', component: AddWorkerComponent , canActivate: [AuthGuard]},
  { path: 'allergen', component: PopUpComponent , canActivate: [AuthGuard]},
  { path: 'submit-food', component: SubmitFoodComponent, canActivate: [AuthGuard]},
  { path: 'app-choose-main-page-items', component: ChooseMainPageItemsComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
