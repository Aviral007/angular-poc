import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http:HttpClient) { }
  registerNewUser(user:any[])
  {
    return this.http.post('http://localhost:3000/users',user);
  }
}
