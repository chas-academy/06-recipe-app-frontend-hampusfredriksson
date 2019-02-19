import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListsComponent } from './recipes/recipes-lists/recipes-lists.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/detail/:id', component: RecipesDetailComponent },
  { path: 'recipes/list', component: RecipesListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
