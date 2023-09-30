import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SharingcomlayComponent } from '../layout/sharingcomlay/sharingcomlay.component';
import { ProfileComponent } from '../shared/profile/profile.component';

const routes: Routes = [

  // {path:'', component: LoginComponent},
  // {path:'logout',component:LogoutComponent},
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  // { path: 'home', component: SharingcomlayComponent},
   { path: '', redirectTo: 'admin/home', pathMatch: 'full' }, 
  { path: 'admin/home', component: ProfileComponent },
  // { path: 'logout', component: LogoutComponent },
  // { path: 'login', component: LoginComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
