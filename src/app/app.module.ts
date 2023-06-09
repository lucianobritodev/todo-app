import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './shared/bootstrap/bootstrap.module';
import { ToastrModule } from 'ngx-toastr';
import { LoginModule } from './pages/public/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    }),
    LoginModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
