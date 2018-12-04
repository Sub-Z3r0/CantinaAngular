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
import {LoginComponent} from './Login/login.component';
import {Router} from '@angular/router';
import {AuthenticationService} from './Shared/Service/authentication.service';
import { ReadMenuesComponent } from './Menues/read-menues/read-menues.component';
import {MenuService} from './Shared/Service/menuService';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NvbarComponent,
    AddMenuComponent,
    LoginComponent,
    ReadMenuesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
