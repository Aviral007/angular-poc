import { Component, OnInit } from '@angular/core';
import { PastBookingsService } from '../../private-services/past-bookings.service';


@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  
  pastbooking: any;

  constructor(private pastService: PastBookingsService) { }

  ngOnInit() {
    this.pastService.get_past_bookings().subscribe(
      past =>{
        this.pastbooking=past;
      }
    )
  }

}
