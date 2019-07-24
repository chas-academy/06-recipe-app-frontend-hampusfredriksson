import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: RecipesService
  ) {}

  recipe: any;

  // handleDetail = () => {
  //   this.id.getRecipe(this.id).subscribe(data => {
  //     this.id = data.hits.map(result => result.id);
  //   });
  //
  handleClick() {
    this.service.saveRecipe(this.recipe).subscribe(data => {
      alert('Hello');
    });
  }

  ngOnInit() {
    this.service.getRecipe(this.route.snapshot.params.id).subscribe(data => {
      this.recipe = data.hits.map(hit => {
        let recipe = hit.recipe;
        recipe.id = recipe.uri.slice(-32);
        return recipe;
      })[0];

      console.log(this.recipe);
    });
  }
}
