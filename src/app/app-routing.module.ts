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
    //loadChildren: './home/home.module#HomeModule'
    loadChildren: ()=>import('./home/home.module').then(m => m.HomeModule)
  }, 
  {
    path:'admin',
    //loadChildren: './admin/admin.module#AdminModule'
    loadChildren: ()=>import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'user',
    //loadChildren: './user/user.module#UserModule'
    loadChildren: ()=>import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
