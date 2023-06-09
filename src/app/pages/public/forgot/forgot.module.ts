import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotEmailPasswordComponent } from './forgot-email-password/forgot-email-password.component';


@NgModule({
  declarations: [
    ForgotEmailPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotRoutingModule
  ]
})
export class ForgotModule { }
