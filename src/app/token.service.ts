import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable()
export class TokenService {
  private iss = [
    'http://rocky-garden-22652.herokuapp.com/api/login',
    'http://rocky-garden-22652.herokuapp.com/api/signup'
  ];

  constructor() {}

  handle(token) {
    this.setToken(token);
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  remove() {
    return localStorage.removeItem('token');
  }
  // ! Might wanna remove this not used anywhere..
  isValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);

      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
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

  loggedIn() {
    return this.isValid();
  }
}
