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
import {FrameComponent} from "./frame/frame.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBadgeModule} from "@angular/material/badge";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EventsListComponent} from "./dashboard/events/events-list.component";
import {StatisticsWidgetComponent} from "./dashboard/statistics/statistics-widget.component";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
      AppComponent,
      GoodDeedHubComponent,
      LoginComponent,
      RegisterComponent,
      FrameComponent,
      DashboardComponent,
      EventsListComponent,
      StatisticsWidgetComponent
  ],
    imports: [
        AppRoutingModule,

        // Angular
        FormsModule,
        BrowserModule,
        RouterOutlet,
        BrowserAnimationsModule,
        ReactiveFormsModule,

        // Material-web design
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatToolbarModule,
        MatBadgeModule,
        MatListModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
