import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SharingcomlayComponent } from './layout/sharingcomlay/sharingcomlay.component';
import { RouterModule } from '@angular/router'
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    SharingcomlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
