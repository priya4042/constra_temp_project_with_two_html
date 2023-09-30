import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstradashboardRoutingModule } from './constradashboard-routing.module';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { DashboardfooterComponent } from './dashboardfooter/dashboardfooter.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { OurprofileComponent } from './ourprofile/ourprofile.component';
import { ProjectallComponent } from './projectall/projectall.component';
import { ServiceallComponent } from './serviceall/serviceall.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


@NgModule({
  declarations: [
    DashboardheaderComponent,
    DashboardfooterComponent,
    MainsectionComponent,
    OurprofileComponent,
    ProjectallComponent,
    ServiceallComponent,
    ErrorpageComponent
  ],
  exports:[
    DashboardheaderComponent,
    DashboardfooterComponent,
    MainsectionComponent
  ],
  imports: [
    CommonModule,
    ConstradashboardRoutingModule
  ]
})
export class ConstradashboardModule { }
