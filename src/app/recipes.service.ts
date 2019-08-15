import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private httpNoIntercept: HttpClient;

  constructor(private http: HttpClient, handler: HttpBackend) {
    this.httpNoIntercept = new HttpClient(handler);
  }

  dbUrl =
    'https://cors-anywhere.herokuapp.com/https://rocky-garden-22652.herokuapp.com/api/recipes';
  baseUrl = 'https://api.edamam.com/';
  app_key = '65ab7ace1da31c7f5898aa958729b117';
  app_id = '61d3b631';
  search: string;
  ingredientLines;
  id;

  getRecipes(search: string, allergens: string[]): Observable<any> {
    allergens = allergens.map(allergen => 'health=' + allergen);
    const url =
      this.baseUrl +
      'search?q=' +
      search +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key +
      '&' +
      allergens.join('&');
    return this.httpNoIntercept.get<any>(url);
  }

  getSavedRecipes(): Observable<any> {
    return this.http.get<any>(this.dbUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // tslint:disable-next-line: object-literal-key-quotes
        Accept: 'application/json'
      })
    });
  }

  saveRecipe(data: any): Observable<any> {
    return this.http.post<any>(this.dbUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getRecipe(id): Observable<any> {
    return this.httpNoIntercept.get<any>(
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
