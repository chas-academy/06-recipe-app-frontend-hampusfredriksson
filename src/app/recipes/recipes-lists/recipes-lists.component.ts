import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-lists',
  templateUrl: './recipes-lists.component.html',
  styleUrls: ['./recipes-lists.component.scss']
})
export class RecipesListsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
