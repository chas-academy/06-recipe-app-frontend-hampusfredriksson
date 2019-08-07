import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RecipesListsComponent } from './recipes/recipes-lists/recipes-lists.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './password/request-reset/request-reset.component';
import { ResponseResetComponent } from './password/response-reset/response-reset.component';
import { BeforeLoginService } from './before-login.service';
import { AfterLoginService } from './after-login.service';

const routes: Routes = [
  { path: '*', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
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
  {
    path: 'request-passowrd-reset',
    component: RequestResetComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
