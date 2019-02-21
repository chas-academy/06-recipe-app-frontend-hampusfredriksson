import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from '../../recipes.service';
import { RecipelistService } from 'src/app/recipelist.service';

@Component({
  selector: 'app-recipes-lists',
  templateUrl: './recipes-lists.component.html',
  styleUrls: ['./recipes-lists.component.scss']
})
export class RecipesListsComponent implements OnInit {
  // CHANGE NAMES
  constructor(private test: RecipelistService, private router: Router) {}

  test1: any[];

  subscription = this.test.currentMessage.subscribe(
    message => (this.test1 = message)
  );

  navigateDetails() {
    this.router.navigate(['/recipes/detail/:id']);
  }
  ngOnInit() {
    console.log(this.test1);
  }
}
