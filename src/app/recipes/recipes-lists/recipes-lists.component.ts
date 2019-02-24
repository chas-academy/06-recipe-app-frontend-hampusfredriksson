import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from '../../recipes.service';
import { RecipelistService } from 'src/app/recipelist.service';
import { CallsService } from 'src/app/calls.service';

@Component({
  selector: 'app-recipes-lists',
  templateUrl: './recipes-lists.component.html',
  styleUrls: ['./recipes-lists.component.scss']
})
export class RecipesListsComponent implements OnInit {
  constructor(
    private test: RecipelistService,
    private router: Router,
    private saveRecipe: CallsService
  ) {}

  recipe: any[];

  subscription = this.test.currentRecipe.subscribe(
    recipe => (this.recipe = recipe)
  );

  navigateDetails() {
    this.router.navigate(['/recipes/detail/:id']);
  }
  ngOnInit() {
    console.log(this.recipe);
    console.log(this.saveRecipe);
  }
}
