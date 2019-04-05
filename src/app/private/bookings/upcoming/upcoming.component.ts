import { Component, OnInit } from '@angular/core';
import { UpcomingBookingsService } from '../../private-services/upcoming-bookings.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  upcmng:any;

  
  constructor(private upcoming : UpcomingBookingsService) { }

  ngOnInit() {
    this.upcoming.get_upcoming_bookings().subscribe(
      booking =>{
        this.upcmng=booking;
      }
    )

  }

}
