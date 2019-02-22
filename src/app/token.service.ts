import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  private iss = {
    login: 'http://localhost:4200/login',
    signup: 'http://localhost:4200/signup'
  };

  handle(token) {
    this.set(token);
    console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        Object.values(this.iss).indexOf(payload.iss) > -1;
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggednIn() {
    return this.isValid();
  }
}
