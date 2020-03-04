import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const adminRoutes: Routes = [
  {
    path:'',
    component:AdminComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'profile',
    component: AdminProfileComponent 
  },
  {
    path:'portal',
    component:PortalComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
