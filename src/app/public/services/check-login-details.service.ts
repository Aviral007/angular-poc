import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CheckLoginDetailsService {
  constructor(private http:HttpClient) { }
  get_users_detail(user){
    return this.http.get('http://localhost:3000/users/?email=' + user);
}
}