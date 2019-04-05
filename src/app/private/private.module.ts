import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private-routing/private-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FaqComponent } from './faq/faq.component';
import { UpcomingComponent } from './bookings/upcoming/upcoming.component';
import { PastComponent } from './bookings/past/past.component';

import { LoggedInUserDetailsService } from './private-services/logged-in-user-details.service';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent, BookingsComponent, FaqComponent, UpcomingComponent, PastComponent],
  imports: [
    PrivateRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[LoggedInUserDetailsService]

  
})
export class PrivateModule { }
