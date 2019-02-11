import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesListsComponent } from './recipes-lists/recipes-lists.component';

@NgModule({
  declarations: [RecipesDetailComponent, RecipesListsComponent],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
