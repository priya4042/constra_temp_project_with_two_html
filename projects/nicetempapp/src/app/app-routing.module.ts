import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharingcomlayComponent } from './layout/sharingcomlay/sharingcomlay.component';
const routes: Routes = [

{
  path:'',
  loadChildren:()=>import('../../../../src/app/constradashboard/constradashboard.module').then(m=>m.ConstradashboardModule)

},

{ path: 'admin/home', component: SharingcomlayComponent },
{
  path:'home',
  loadChildren:()=>import('../app/admin/admin.module').then(m=>m.AdminModule)
}

// {
//   path: 'error',
//   component: ErrorpageComponent
// },
// {
//   path: '**',
//   redirectTo: '/error'
// }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }