import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable()
export class TokenService {
  private iss = {
    login: 'http://recipe.test/api/login',
    signup: 'http://recipe.test/api/signup'
  };

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
