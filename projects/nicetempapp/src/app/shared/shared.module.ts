import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorfleComponent } from './errorfle/errorfle.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProfileComponent,
    ErrorfleComponent,
    FaqComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
