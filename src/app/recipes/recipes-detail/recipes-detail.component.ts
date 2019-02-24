import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from '../../recipes.service';
import { RecipelistService } from '../../recipelist.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: RecipesService,
    private saveRecipe: RecipelistService
  ) {}

  recipe: any;

  save: any;

  navigateHome() {
    this.router.navigate(['']);
  }

  navigateSaved() {
    this.router.navigate(['/saved']);
  }

  navigateList() {
    this.router.navigate(['recipes/list']);
  }

  ngOnInit() {
    this.service.getRecipe(this.route.snapshot.params.id).subscribe(data => {
      this.recipe = data.hits.map(hit => hit.recipe);
      console.log(this.recipe);
    });

    this.saveRecipe.currentRecipe.subscribe(save => (this.save = save));
  }
  newRecipe(data) {
    this.saveRecipe.stackRecipes(data);
    console.log(data);
  }
}
