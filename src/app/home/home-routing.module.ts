import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:'',
  component:HomeComponent,
  children:[
    {
      path:'log-in',
      component:LogInComponent
    },
    {
      path:'sign-up',
      component:SignUPComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }