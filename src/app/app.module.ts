import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {NvbarComponent} from './nvbar/nvbar.component';
import { AddMenuComponent } from './Menues/add-menu/add-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from './shared/Service/authentication.service';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { PopUpComponent } from './Allergen/pop-up/pop-up.component';
import {WorkerService} from './shared/Service/worker.service';
import { AddWorkerComponent } from './Workers/add-worker/add-worker.component';
import { SubmitFoodComponent } from './submit-food/submit-food.component';
import { ChooseMainPageItemsComponent } from './choose-main-page-items/choose-main-page-items.component';
import {AuthGuard} from './_guards/auth.guard';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AddMotdComponent } from './add-motd/add-motd.component';
import { AddSpecieloffersComponent } from './add-specieloffers/add-specieloffers.component';
import {MenuUpdateComponent} from './specialOffers-update/menu-update.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NvbarComponent,
    AddMenuComponent,
    SubmitFoodComponent,
    ChooseMainPageItemsComponent,
    AdminViewComponent,
    PopUpComponent,
    AddWorkerComponent,
    SubmitFoodComponent,
    SearchBoxComponent,
    AddMotdComponent,
    AddSpecieloffersComponent,
    MenuUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    WorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
