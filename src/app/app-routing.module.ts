import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListsComponent } from './recipes/recipes-lists/recipes-lists.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './before-login.service';
import { AfterLoginService } from './after-login.service';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/detail/:id', component: RecipesDetailComponent },
  { path: 'recipes/list', component: RecipesListsComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  { path: 'request-password-reset', component: RequestResetComponent },
  { path: 'request-password-respone', component: ResponseResetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
