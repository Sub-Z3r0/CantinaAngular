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
import {SearchBoxComponent} from "./search-box/search-box.component";
import {AddSpecieloffersComponent} from './add-specieloffers/add-specieloffers.component';
import {MenuUpdateComponent} from './specialOffers-update/menu-update.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'menu-add', component: AddMenuComponent},
  { path: 'adminview', component: AdminViewComponent },
  { path: 'search', component: SearchBoxComponent },
  { path: 'add-specielOffers', component: AddSpecieloffersComponent },
  { path: 'menu-update/:id', component: MenuUpdateComponent},
  { path: 'adminview/addworker', component: AddWorkerComponent },
  { path: 'allergen', component: PopUpComponent },
  { path: 'submit-food', component: SubmitFoodComponent},
  { path: 'app-choose-main-page-items', component: ChooseMainPageItemsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
