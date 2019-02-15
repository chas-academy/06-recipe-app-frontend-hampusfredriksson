import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListsComponent } from './recipes/recipes-lists/recipes-lists.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SavedDetailsComponent } from './saved/saved-details.component';
import { RecipesService } from './recipes.service';

const routes: Routes = [
  // { path: '', component: RecipesComponent },
  // { path: 'recipe/:id', component: RecipesDetailComponent },
  // { path: 'saved', component: SavedDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesListsComponent,
    RecipesDetailComponent,
    SavedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routes
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
