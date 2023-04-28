import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./services/auth-guard.service";

import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/dashboard/main/main.component';


const routes: Routes = [
  {path: "", redirectTo:'/login', pathMatch:'full'},
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
