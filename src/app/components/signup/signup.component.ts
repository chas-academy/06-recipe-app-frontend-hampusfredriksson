import { Component, OnInit } from '@angular/core';
import { CallsService } from 'src/app/calls.service';
import { TokenService } from 'src/app/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    password: null,
    password_confirmation: null
  };
  constructor(
    private calls: CallsService,
    private Token: TokenService,
    private Router: Router
  ) {}
  public error = null;

  onSubmit() {
    this.calls
      .signup(this.form)
      .subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Router.navigateByUrl('/profile');
  }

  handleError(error: any): any {
    this.error = error.error.errors;
  }

  ngOnInit() {}
}
