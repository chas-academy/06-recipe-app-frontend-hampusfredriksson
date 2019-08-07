import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saved-details',
  templateUrl: './saved-details.component.html',
  styleUrls: ['./saved-details.component.scss']
})
export class SavedDetailsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  getSavedRecipe() {
    return this.http.get('http://recipe.test/api/saved');
  }
  ngOnInit() {}
}
