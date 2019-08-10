import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-saved-details',
  templateUrl: './saved-details.component.html',
  styleUrls: ['./saved-details.component.scss']
})
export class SavedDetailsComponent implements OnInit {
  recipes: any;

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.getSavedRecipes().subscribe(data => {
      return (this.recipes = data.map(result => {
        const recipe = JSON.parse(result.json_data);
        recipe.id = result.id;
        return recipe;
      }));
    });
  }
}
