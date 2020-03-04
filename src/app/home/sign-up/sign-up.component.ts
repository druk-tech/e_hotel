import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  signUpForm:FormGroup;
  success=false;

  constructor(private fb: FormBuilder, private signUpService:ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.signUpForm = this.fb.group({
      username: ['',Validators.required],
      contact: ['',[Validators.required,Validators.minLength(8)]],
      email: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',Validators.required,Validators.minLength(6)],
    });

  
  }

  createUsers(){
    this.signUpService.createUsers(this.signUpForm.value)
    .subscribe(          
      res => {
      this.success=true;
      setTimeout(()=>this.router.navigate(['home']),2000);    
    },
    err=>console.log(err));
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get contact(){
    return this.signUpForm.get('contact');
  }

  get username(){
    return this.signUpForm.get('username');
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }

  SignUpSubmit(){
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }
}
