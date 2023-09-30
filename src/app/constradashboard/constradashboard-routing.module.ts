import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'projects/nicetempapp/src/app/admin/login/login.component';
import { LogoutComponent } from 'projects/nicetempapp/src/app/admin/logout/logout.component';
import { SharingcomlayComponent } from 'projects/nicetempapp/src/app/layout/sharingcomlay/sharingcomlay.component';
import { ProfileComponent } from 'projects/nicetempapp/src/app/shared/profile/profile.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ExtraContentGuard } from 'src/extra-content.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin/home', component: SharingcomlayComponent, canActivate: [ExtraContentGuard] },
  { path: 'home', component: SharingcomlayComponent },
  { path: 'admin/profile', component: ProfileComponent },
  {path:'**', component:ErrorpageComponent}
  // Other routes as needed
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstradashboardRoutingModule { }
