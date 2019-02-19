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
  // CHANGE THIS NAME
  constructor(private test: RecipelistService) {}
  ngOnInit() {
    console.log(this.test);
  }
}
