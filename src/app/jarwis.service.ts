import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseURL = 'http://rocky-garden-22652.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(`${this.baseURL}/signup`, data);
  }

  login(data: any) {
    return this.http.post(`${this.baseURL}/login`, data);
  }
}
