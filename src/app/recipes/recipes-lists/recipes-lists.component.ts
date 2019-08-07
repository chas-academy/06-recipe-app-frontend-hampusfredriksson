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
  allergens = [
    { name: 'peanut-free', checked: false },
    { name: 'alcohol-free', checked: false },
    { name: 'fish-free', checked: false },
    { name: 'vegan', checked: false },
    { name: 'vegetarian', checked: false }
  ];

  handleSearch = () => {
    this.recipe
      .getRecipes(this.inputValue, this.selectedOptions)
      .subscribe(data => {
        this.recipes = data.hits.map(result => {
          const recipe = result.recipe;
          recipe.id = recipe.uri.slice(-32);
          return recipe;
        });
      });
  };

  get selectedOptions() {
    // right now: ['1','3']
    return this.allergens
      .filter(allergen => allergen.checked)
      .map(allergen => allergen.name);
  }
  // handleClick(a, b, c) {
  //   console.log(this.a);
  // console.log(b);
  // }

  goDetails() {
    // this.router.navigate(['/recipes/recipes-detail/:id']);
    // debugger;
  }

  ngOnInit() {}
}
