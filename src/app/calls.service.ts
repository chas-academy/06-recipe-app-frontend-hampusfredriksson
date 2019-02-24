import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CallsService {
  private baseUrl = 'http://recipe.test/api';
  constructor(private http: HttpClient) {}

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  sendRecipe(data): Observable<any> {
    return this.http.post('http://recipe.test/api/save', data);
  }
}
