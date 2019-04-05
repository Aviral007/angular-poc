import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserDetailService {

  constructor(private http:HttpClient) { }
  update_user_detail(id,fromdata){
   
    // alert("Data is successfully Updated");
    return this.http.patch('http://localhost:3000/users/'+id,fromdata);
  
}
}
