import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
