import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpcomingBookingsService {

  constructor(private http:HttpClient) { }

  get_upcoming_bookings(){
    return this.http.get('http://localhost:3000/upcoming');
}

}
