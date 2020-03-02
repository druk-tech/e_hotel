import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUPComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'sign-up',component:SignUPComponent},
  {path:'log-in',component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
