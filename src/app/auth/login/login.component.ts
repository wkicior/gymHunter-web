import { Component, OnInit } from '@angular/core';
import {LogInForm} from "./login-form";
import {login} from "./login.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new LogInForm();

  constructor() { }

  ngOnInit() {
  }

  login() {
    const username = this.loginForm.get('username').value
    const password =  this.loginForm.get('passowrd').value
    //store.dispatch(login({ username: username, password: password }));
  }
}
