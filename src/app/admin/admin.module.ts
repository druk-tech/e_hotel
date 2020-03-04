import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortalComponent } from './portal/portal.component';


@NgModule({
    declarations:[
        DashboardComponent,
        AdminProfileComponent,
        AdminModule,
        PortalComponent
    ],
    
    exports:[AdminModule],

    imports:[
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        FormsModule,HttpClientModule
    ]

})

export class AdminModule { }