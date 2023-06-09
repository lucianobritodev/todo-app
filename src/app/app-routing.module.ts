import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/public/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/public/forgot/forgot.module').then(m => m.ForgotModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/private/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/public/errors/errors.module').then(m => m.ErrorsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
