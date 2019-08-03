import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../jarwis.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  constructor(private Jarwis: JarwisService) {}

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }
  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {}
}
