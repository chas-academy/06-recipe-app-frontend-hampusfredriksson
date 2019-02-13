import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipesListsComponent } from "./recipes/recipes-lists/recipes-lists.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";

@NgModule({
  declarations: [AppComponent, RecipesListsComponent, RecipesDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
