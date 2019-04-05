import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileComponent } from '../profile/profile.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { UpcomingComponent } from '../bookings/upcoming/upcoming.component';
import { PastComponent } from '../bookings/past/past.component';
import { FaqComponent } from '..//faq/faq.component';

import { AuthPrivateGuard } from '../private-guards/auth-private-guards.guard';


const routes: Routes = 
[
  {path:'', component: NavbarComponent,
  children: [
    {path:'', component: ProfileComponent },
  {path:'faqs', component: FaqComponent },
  {path:'booking', component: BookingsComponent,children :[
    {path:'',component:UpcomingComponent},
    {path:'past',component:PastComponent},
  ] }
  ],canActivate:[AuthPrivateGuard] }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PrivateRoutingModule { }
