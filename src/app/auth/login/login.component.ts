import { Component, OnInit } from '@angular/core';
import {LogInForm} from "./login-form";
import {State} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {Login} from "../auth.actions";
import {selectIsAuthenticated, selectIsLoginFailed} from "../auth.selectors";
import {Router} from "@angular/router";
import {filter, take} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new LogInForm();

  constructor(private store: Store<State>, private router: Router) { }

  isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  isLoginFailed$ = this.store.pipe(select(selectIsLoginFailed));


  ngOnInit() {
    this.navigateToSubscriptionsOnAuthenticated();
    this.setLoginFailedOnFormOnLoginFailed();
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password =  this.loginForm.get('password').value;
    this.store.dispatch(new Login(username, password));
  }

  private setLoginFailedOnFormOnLoginFailed() {
    this.isLoginFailed$.subscribe(() =>
      this.loginForm.setErrors({'loginFailed': true})
    );
  }

  private navigateToSubscriptionsOnAuthenticated() {
    this.isAuthenticated$.pipe(
      filter(a => a),
      take(1))
      .subscribe(() =>
        this.router.navigate(['/subscriptions'])
      );
  }
}
