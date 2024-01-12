import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {GoodDeedHubComponent} from "./good-deed-hub.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FrameComponent} from "./frame/frame.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '',
    component: GoodDeedHubComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'dashboard', component: FrameComponent, children: [
          { path: '', component: DashboardComponent }
        ] },
      { path: '**', redirectTo: 'login'}
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
