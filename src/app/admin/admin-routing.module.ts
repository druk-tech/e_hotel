import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PortalComponent } from './portal/portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {path:'',redirectTo:'/admin',pathMatch:'full'},
  {path:'admin',component:AdminComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'portal',component:PortalComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
