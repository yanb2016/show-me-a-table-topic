import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors: {};
  newUser = {
    email: '',
    password: '',
    comfirmedPassword: ''
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  registerUser() {
    const email = this.newUser.email;
    const password = this.newUser.password;
    const confirm_password = this.newUser.comfirmedPassword;

    console.log('email:', email);
    console.log('password:', password);
    console.log('confirm_password:', confirm_password);

    if (password !== confirm_password) {
      return;
    }

    const url = 'http://' + window.location.hostname + ':3001/auth/signup';
    const request = new Request(
      url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }
    )
    fetch(request).then(response => {
      if(response.status === 200) {    
        this.errors = {}  
        this.router.navigateByUrl('/login');
      } else {
        response.json().then(json => {
          //console.log(json);
          this.errors = json.errors ? json.errors : {};
          this.errors['summary'] = json.message;
          console.log(this.errors);
        })
      }
    })
    
  }
}
