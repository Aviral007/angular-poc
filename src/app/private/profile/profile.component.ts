import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedInUserDetailsService } from '../private-services/logged-in-user-details.service';
import { UpdateUserDetailService } from '../private-services/update-user-detail.service';
// import { formatDate } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileUpdationForm:FormGroup;
  id:number;

  fullname : string;
  formData ={firstName : "" ,
              lastName:"",
              email:"",
              phn_no:12,
              address:"",
              medical:""};

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userDetails : LoggedInUserDetailsService,
              private updateUser: UpdateUserDetailService ) { }

  ngOnInit() 
  {

    this.id=JSON.parse(localStorage.getItem('user_id'));
    

    this.profileUpdationForm = this.formBuilder.group({
            fullName:['',[Validators.required,Validators.email]],
            updtEmail:['',Validators.required],
            updtPhn_no:['',Validators.required],
            updtAddrs:['',Validators.required],
            updtMedical:['',Validators.required]
        });
    
     this.userDetails.get_loggedin_user_detail(this.id).subscribe(result =>
      {

      this.fullname=result[0].firstName + " " + result[0].lastName;
      this.profileUpdationForm.controls['fullName'].setValue(this.fullname);
      this.profileUpdationForm.controls['updtEmail'].setValue(result[0].email);
      this.profileUpdationForm.controls['updtPhn_no'].setValue(result[0].phn_no);
      this.profileUpdationForm.controls['updtAddrs'].setValue(result[0].address);
      this.profileUpdationForm.controls['updtMedical'].setValue(result[0].medical);
    }
     );
   }

  onUpdate()
  {
    
    var splitted =this.profileUpdationForm.value.fullName.split(" "); 
    
    this.formData.firstName=splitted[0];
    var x=splitted.length;
    for(var i=1;i<x;i++)
    {
      this.formData.lastName=this.formData.lastName+splitted[i];
    }
    // this.formData.lastName=splitted[1]+splitted[2];
    this.formData.email=this.profileUpdationForm.value.updtEmail;
    this.formData.address=this.profileUpdationForm.value.updtAddrs;
    this.formData.phn_no=this.profileUpdationForm.value.updtPhn_no;
    this.formData.medical=this.profileUpdationForm.value.updtMedical;
    
    this.updateUser.update_user_detail(this.id,this.formData).subscribe();
    localStorage.setItem("fname",this.formData.firstName);
    location.reload();
    alert("Data is successfully Updated");
    
  }

}
