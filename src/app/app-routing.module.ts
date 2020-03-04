import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    loadChildren: ()=>import('./home/home.module').then(module=>module.HomeModule)
  }, 
  {
    path:'admin',
    loadChildren: ()=>import('./admin/admin.module').then(module=>module.AdminModule)
  },
  {
    path:'user',
    loadChildren: ()=>import('./user/user.module').then(module=>module.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
