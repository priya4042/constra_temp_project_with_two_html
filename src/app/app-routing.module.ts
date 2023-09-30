import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedfileComponent } from './layout/sharedfile/sharedfile.component';
import { ProjectallComponent } from './constradashboard/projectall/projectall.component';
import { ServiceallComponent } from './constradashboard/serviceall/serviceall.component';
import { OurprofileComponent } from './constradashboard/ourprofile/ourprofile.component';
import { FaqComponent } from 'projects/nicetempapp/src/app/shared/faq/faq.component';

const routes: Routes = [
  { path: '', component: SharedfileComponent },
  { path: 'allProjects', component: ProjectallComponent },
  { path: 'allservices', component: ServiceallComponent },
  { path: 'ourprofile', component: OurprofileComponent },
  { path: 'admin/faq', component: FaqComponent },
  {
    path: 'admin',
    loadChildren: () => import('../../projects/nicetempapp/src/app/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
