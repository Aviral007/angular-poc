import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicRoutingModule } from './public-routing/public-routing.module';
//import { PrivateModule } from '../private/private.module';


import {RegisteruserService } from './services/registeruser.service';
import {CheckLoginDetailsService } from './services/check-login-details.service';


import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
// import { NavbarComponent } from '../private/navbar/navbar.component';

@NgModule({
  declarations: [RegistrationComponent,LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicRoutingModule,
   // PrivateModule
  ],
  // exports: [RegistrationComponent],
  providers:[RegisteruserService,CheckLoginDetailsService]
})
export class PublicModule { }
