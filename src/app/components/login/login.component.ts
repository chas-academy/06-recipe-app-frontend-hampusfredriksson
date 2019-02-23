import { Component, OnInit } from '@angular/core';
import { CallsService } from 'src/app/calls.service';
import { TokenService } from 'src/app/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private Calls: CallsService,
    private Token: TokenService,
    private Router: Router,
    private Auth: AuthService
  ) {}

  onSubmit() {
    this.Calls.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.Router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {}
}
