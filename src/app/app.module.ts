import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavedDetailsComponent } from './saved/saved-details.component';
import { RecipesService } from './recipes.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TokenService } from './token.service';
import { JarwisService } from './jarwis.service';
import { AuthService } from './auth.service';
import { BeforeLoginService } from './before-login.service';
import { AfterLoginService } from './after-login.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SavedDetailsComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    RecipesService,
    JarwisService,
    TokenService,
    AuthService,
    BeforeLoginService,
    AfterLoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
