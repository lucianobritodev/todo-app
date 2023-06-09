import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotEmailPasswordComponent } from './forgot-email-password/forgot-email-password.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotEmailPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotRoutingModule { }
