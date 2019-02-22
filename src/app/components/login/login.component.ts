import { Component, OnInit } from '@angular/core';
import { CallsService } from 'src/app/calls.service';
import { TokenService } from 'src/app/token.service';

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

  constructor(private Calls: CallsService, private Token: TokenService) {}

  onSubmit() {
    this.Calls.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {}
}
