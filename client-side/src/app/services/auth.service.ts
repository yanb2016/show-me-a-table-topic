import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  authenticateUser(token, email) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }
  isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
  deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getEmail() {
    return localStorage.getItem('email');
  }
}
