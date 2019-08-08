import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesListsComponent } from './recipes-lists/recipes-lists.component';
import { RecipesComponent } from './recipes.component';

import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipesDetailComponent,
    RecipesListsComponent,
    RecipesComponent
  ],
  imports: [CommonModule, FormsModule, RecipesRoutingModule]
})
export class RecipesModule {}
