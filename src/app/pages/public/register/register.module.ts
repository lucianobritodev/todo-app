import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';
import { RegisterBootstrapModule } from 'src/app/shared/register-bootstrap/register-bootstrap.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RegisterBootstrapModule
  ]
})
export class RegisterModule { }
