import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {


signUpForm : FormGroup;
  constructor(private fb: FormBuilder, private signUpService:ServiceService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.signUpForm = this.fb.group({

      contact: [''],
      username: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      permissionAccess: false
    });
  
  }
  submit(){
    this.signUpService.createUsers(this.signUpForm.value).subscribe();
  }
  
}
