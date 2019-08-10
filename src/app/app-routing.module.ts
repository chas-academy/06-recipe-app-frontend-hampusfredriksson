import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BeforeLoginService } from './before-login.service';
import { AfterLoginService } from './after-login.service';
import { SavedDetailsComponent } from './saved/saved-details.component';

const routes: Routes = [
  { path: '*', redirectTo: '/login', pathMatch: 'full' },
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
    // _ Move this to recipe-routing along with all other "inside login function is", not working atm..
    path: 'saved',
    component: SavedDetailsComponent,
    canActivate: [AfterLoginService]
  },
  { path: '', loadChildren: './recipes/recipes.module#RecipesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
