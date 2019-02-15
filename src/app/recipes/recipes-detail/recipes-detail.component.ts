import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  constructor(private id: RecipesService) {}

  handleDetail = () => {
    this.id.getRecipe(this.id).subscribe(data => {
      this.id = data.hits.map(result => result.id);
    });
  };

  ngOnInit() {}
}
