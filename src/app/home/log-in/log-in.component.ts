import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm:FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.logInForm=this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    console.log(this.logInForm.value);
    this.logInForm.reset();
  }

  get email(){
    return this.logInForm.get('email');
  }

  get password(){
    return this.logInForm.get('password');
  }

}
