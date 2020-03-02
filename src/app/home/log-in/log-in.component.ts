import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm:FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.logInForm=new FormGroup({
      email:new FormControl[''],
      password:new FormControl['']
    });
  }

}
