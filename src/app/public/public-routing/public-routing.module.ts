import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { AuthPublicGuard } from '../public-guards/auth.guard';

import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = 
[
  
  { path : '' , component : RegistrationComponent,canActivate:[AuthPublicGuard]  },
  { path : 'login' , component : LoginComponent,canActivate:[AuthPublicGuard] }
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
