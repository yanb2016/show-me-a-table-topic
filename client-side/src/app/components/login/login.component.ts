import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors: {};
  user = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService,
              private router: Router,
             ) { }

  ngOnInit() {
  }
  checkUser() {
    const email = this.user.email;
    const password = this.user.password;
    const url = 'http://' + window.location.hostname + ':3000/auth/login';
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
      if (response.status === 200) {
        this.errors = {};
        response.json().then(json => {
          this.auth.authenticateUser(json.token, email);
        });
        location.reload();
        this.router.navigateByUrl('/'); 
      } else {
        console.log('Login failed');
        response.json().then(json => {
          console.log(json);
          this.errors = json.errors ? json.error: {};
          this.errors['summary'] = json.message;
        })
      }
    } 
    )
  }
}
