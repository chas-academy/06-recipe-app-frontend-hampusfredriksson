import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-lists',
  templateUrl: './recipes-lists.component.html',
  styleUrls: ['./recipes-lists.component.scss']
})
export class RecipesListsComponent implements OnInit {
  constructor(private recipe: RecipesService) {}

  inputValue = this.inputValue;
  recipies: [];

  handleSearch = () => {
    this.recipe.getRecipes(this.inputValue).subscribe(data => {
      this.recipies = data.hits.map(result => result.recipe);
      console.log(this.recipies);
    });
  };

  ngOnInit() {}
}
