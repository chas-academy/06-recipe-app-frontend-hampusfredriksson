import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseURL = 'http://recipe.test/api';
  constructor(private http: HttpClient) {}

  signup(data) {
    return this.http.post(`${this.baseURL}/signup`, data);
  }

  login(data) {
    return this.http.post(`${this.baseURL}/login`, data);
  }
}
