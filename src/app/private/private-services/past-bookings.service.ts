import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastBookingsService {

  constructor(private http:HttpClient) { }

  get_past_bookings()
  {
    return this.http.get('http://localhost:3000/past');
  }
}
