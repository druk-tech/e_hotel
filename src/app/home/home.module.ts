import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    HomeComponent,
    LogInComponent,
    SignUPComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }