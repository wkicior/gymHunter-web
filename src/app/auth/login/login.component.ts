import { Component, OnInit } from '@angular/core';
import {LogInForm} from "./login-form";
import {State} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {Login} from "../auth.actions";
import {selectIsAuthenticated, selectIsLoginFailed} from "../auth.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new LogInForm();

  constructor(private store: Store<State>) { }

  isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  isLoginFailed$ = this.store.pipe(select(selectIsLoginFailed));

  ngOnInit() {
    this.isAuthenticated$.subscribe(val => console.log("authenticated: " + val));
    this.isLoginFailed$.subscribe( () =>
      this.loginForm.setErrors({'loginFailed': true})
    );
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password =  this.loginForm.get('password').value;
    this.store.dispatch(new Login(username, password));
  }
}
