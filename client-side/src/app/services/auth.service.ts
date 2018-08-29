import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }
  authenticateUser(token, email) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }
  isUserAuthenticated(): Observable<boolean> {
    return of(localStorage.getItem('token') !== null)
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
