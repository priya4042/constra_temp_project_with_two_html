import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedfileComponent } from './layout/sharedfile/sharedfile.component';
import { ConstradashboardModule } from './constradashboard/constradashboard.module';
import { SharingcomlayComponent } from 'projects/nicetempapp/src/app/layout/sharingcomlay/sharingcomlay.component';
import { SharedModule } from 'projects/nicetempapp/src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SharedfileComponent,
    SharingcomlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConstradashboardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
