import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetfaqsService {

  constructor(private http:HttpClient) { }
  get_faqs(){
    return this.http.get('http://localhost:3000/faqs');
}
}