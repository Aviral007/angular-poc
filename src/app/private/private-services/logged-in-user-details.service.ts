import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoggedInUserDetailsService {

  constructor(private http:HttpClient) { }

  get_loggedin_user_detail(id){
    return this.http.get('http://localhost:3000/users/?id=' + id);
}
}
