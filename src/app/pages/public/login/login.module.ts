import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http'

import { LoginRoutingModule } from './login-routing.module';
import { LoginBootstrapModule } from 'src/app/shared/login-bootstrap/login-bootstrap.module';

import { LoginComponent } from './login.component';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRoutingModule,
    LoginBootstrapModule,
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
