import { Component, OnInit } from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router'

import { RecipesService } from '../recipes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipe: RecipesService
  ) {}

  [x: string]: any
  recipes: any
  inputValue = this.inputValue

  navigateList() {
    this.router.navigate(['/recipes/list'])
  }

  handleSearch = () => {
    this.recipe.getRecipes(this.inputValue).subscribe(data => {
      this.recipes = data.hits.map(result => result.recipe)
    })
  }
  ngOnInit() {}
}
