import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class CallsService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://recipe.test/api'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
  }

  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendRecipe(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, data, this.httpOptions)
  }
}
