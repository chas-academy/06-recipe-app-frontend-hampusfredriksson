import { Component } from "@angular/core";

import { RecipesService } from "./recipes.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Recipe App";

  constructor(private recipe: RecipesService) {}

  handleSearch = () => {
    this.recipe.getRecipe().subscribe(data => {
      console.log(data);
    });
  };
}
