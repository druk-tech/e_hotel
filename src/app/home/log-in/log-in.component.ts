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
      'email':['',[Validators.required]],
      'password':['',[Validators.required, Validators.minLength(6)]]
    });
  }

}
