import { Component, OnInit } from "@angular/core";

import { RecipesService } from "../../recipes.service";

@Component({
  selector: "app-recipes-lists",
  templateUrl: "./recipes-lists.component.html",
  styleUrls: ["./recipes-lists.component.scss"]
})
export class RecipesListsComponent implements OnInit {
  constructor(private recipe: RecipesService) {}

  inputValue = this.inputValue;
  recipies: [];

  handleSearch = () => {
    this.recipe.getRecipe(this.inputValue).subscribe(data => {
      // this.recipe = data.recipe(recipe => recipe.recipe);
      this.recipies = data.hits.map(result => result.recipe);
      console.log(data);
    });
  };

  // handleList = () => {
  //   this.recipe.getRecipe(this.inputValue).subscribe(data => {
  //     this.recipie = data.hits.map(hit => hit.recipe);
  //   });
  // };

  ngOnInit() {}
}
