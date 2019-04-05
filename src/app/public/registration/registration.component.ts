import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RegisteruserService } from '../services/registeruser.service';
import { MustMatch } from '../MustMatch';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  // user = {firstName:"",lastName:"",email:"",phn_no:"",address:"",medical:"",password:"",re_password:""};

  constructor(private formBuilder: FormBuilder,
              private registerService:RegisteruserService,
              private router: Router) { }

  ngOnInit() {


    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$'),Validators.minLength(3),Validators.maxLength(13)]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$'),Validators.minLength(3),Validators.maxLength(13)]],
      email: ['', [Validators.required,Validators.email]],
      phn_no: ['', [Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.minLength(10)]],
      address: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      medical: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      re_password: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: MustMatch('password', 're_password')
  });
  }

  onSubmit()
  {
     console.log("in on submit");
    this.registerService.registerNewUser(this.registerForm.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    
    event.preventDefault();
    this.router.navigate(['/login']);
    alert("You are registered Successfully")
  }

}

