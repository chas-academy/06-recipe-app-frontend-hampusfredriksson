import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesListsComponent } from './recipes-lists/recipes-lists.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesDetailComponent,
    RecipesListsComponent,
    RecipesComponent
  ],
  imports: [CommonModule, FormsModule]
})
export class RecipesModule {}
