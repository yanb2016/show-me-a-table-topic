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
  constructor() { }

  ngOnInit() {
  }

  registerUser() {
    // prevent default action. in this case, action is the form submission event
    // event.preventDefault();

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
        //window.location.replace('/login');
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

  // changeUser(event) {
  //   const field = event.target.name;
  //   const user = this.newUser;
  //   user[field] = event.target.value;

  //   this.setState({user});

  //   const errors = this.state.errors;
  //   if (this.state.user.password !== this.state.user.confirm_password) {
  //     errors.password = "Password and Confirm Password don't match.";
  //   } else {
  //     errors.password = '';
  //   }

  //   this.setState({errors});
  // }
}
