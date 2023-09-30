import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedfileComponent } from 'src/app/layout/sharedfile/sharedfile.component';
import { FaqComponent } from './faq/faq.component';
import { SharingcomlayComponent } from '../layout/sharingcomlay/sharingcomlay.component';
import { ErrorfleComponent } from './errorfle/errorfle.component';

const routes: Routes = [


  // {path:'back', component:SharedfileComponent},
  {path:'',redirectTo:'back',pathMatch:'full'},

  {
    path:'admin/faq',component:FaqComponent
  },

  {
    path:'errorfile',component:ErrorfleComponent
  },

  {path:'**',redirectTo:'errorfile', pathMatch:'full'},

  {path:'home', component:SharingcomlayComponent}

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
