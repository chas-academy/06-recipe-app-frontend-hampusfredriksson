import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-lists',
  templateUrl: './recipes-lists.component.html',
  styleUrls: ['./recipes-lists.component.scss']
})
export class RecipesListsComponent implements OnInit {
  constructor(private recipe: RecipesService) {}

  [x: string]: any;
  recipes: any;
  inputValue: any;

  handleSearch = () => {
    this.recipe.getRecipes(this.inputValue).subscribe(data => {
      this.recipes = data.hits.map(result => {
        let recipe = result.recipe;
        recipe.id = recipe.uri.slice(-32);
        return recipe;
      });
    });
  };

  goDetails() {
    // this.router.navigate(['/recipes/recipes-detail/:id']);
    // debugger;
  }

  ngOnInit() {}
}
