import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListsComponent } from './recipes-lists/recipes-lists.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';

import { AfterLoginService } from '../after-login.service';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesListsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'recipes/detail/:id',
    component: RecipesDetailComponent,
    canActivate: [AfterLoginService]
  },

  { path: 'recipes-list', component: RecipesListsComponent },
  { path: 'recipes-details/:id', component: RecipesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
