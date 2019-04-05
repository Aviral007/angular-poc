import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckLoginDetailsService } from '../services/check-login-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  len : number;         //for storing length of response

  constructor(private formBuilder: FormBuilder,
    private loginDetail: CheckLoginDetailsService,
              private router: Router) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      lgnEmail:['',[Validators.required,Validators.email]],
      lgnPassword:['',Validators.required]
      
    });
  }
  get f() { return this.loginForm.controls; } //getter function

  login()                           //Function to check log in credentials
  {
   
    //
    this.loginDetail.get_users_detail(this.loginForm.value.lgnEmail).subscribe(
      response => {
        this.len=(Object.keys(response).length);

    if(this.len ==0)
    {
      alert("Please Enter corect Email");
    }
    else{
     

      if((response[0].password)==(this.loginForm.value.lgnPassword))
      {
        this.router.navigate(['/privatemodule']); 
        localStorage.setItem("user_id",response[0].id);
        localStorage.setItem("fname",response[0].firstName);
        
      }
      else{
        alert("Please Enter corect Password");

      }
      
    }
  });
  }
}