import { Component, OnInit } from '@angular/core';
import { CallsService } from 'src/app/calls.service';

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
  constructor(private calls: CallsService) {}
  public error = null;

  onSubmit() {
    this.calls
      .signup(this.form)
      .subscribe(data => console.log(data), error => this.handleError(error));
  }
  handleError(error: any): any {
    this.error = error.error.errors;
  }

  ngOnInit() {}
}
