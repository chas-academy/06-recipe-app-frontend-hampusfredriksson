import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  dbUrl = 'http://recipe.test/api/recipes/';
  baseUrl = 'https://api.edamam.com/';
  app_key = '65ab7ace1da31c7f5898aa958729b117';
  app_id = '61d3b631';
  search: string;
  ingredientLines;
  id;

  getRecipes(search: string): Observable<any> {
    return this.http.get<any>(
      this.baseUrl +
        'search?q=' +
        search +
        '&app_id=' +
        this.app_id +
        '&app_key=' +
        this.app_key
    );
  }

  saveRecipe(data: any): Observable<any> {
    return this.http.post<any>(this.dbUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getRecipe(id): Observable<any> {
    return this.http.get<any>(
      this.baseUrl +
        'search?q=' +
        id +
        '&app_id=' +
        this.app_id +
        '&app_key=' +
        this.app_key
    );
  }
}
