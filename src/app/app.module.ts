import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUPComponent } from './home/sign-up/sign-up.component';
import { LogInComponent } from './home/log-in/log-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PortalComponent } from './admin/portal/portal.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUPComponent,
    LogInComponent,
    AdminComponent,
    UserComponent,
    ProfileComponent,
    PortalComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HomeRoutingModule,
    AdminRoutingModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
