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
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesListsComponent,
    RecipesDetailComponent,
    SavedDetailsComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: RecipesComponent },
      { path: 'recipes-list', component: RecipesListsComponent },
      { path: 'recipes-details/:id', component: RecipesDetailComponent },
      { path: 'saved', component: SavedDetailsComponent }
    ])
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
