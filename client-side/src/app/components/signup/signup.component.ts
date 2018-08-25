import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser = {
    email: '',
    password: '',
    comfirmedPassword: ''
  }
  constructor() { }

  ngOnInit() {
  }
  registerUser() {
    console.log(this.newUser);
  }
}
