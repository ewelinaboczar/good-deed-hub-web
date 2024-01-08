import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoodDeedHubComponent } from "./good-deed-hub.component";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    GoodDeedHubComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,

    // Angular
    FormsModule,
    BrowserModule,
    RouterOutlet,
    BrowserAnimationsModule,

    // Material-web design
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
