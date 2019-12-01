import { Component, OnInit } from '@angular/core';
import {State} from "../reducers";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {selectIsAuthenticated} from "../auth/auth.selectors";
import {Logout} from "../auth/auth.actions";
import {distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  isResponsive: boolean = false;
  isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated$.pipe(
      distinctUntilChanged(),
      filter(a => !a),
    ).subscribe(() => this.router.navigate(['/']));
  }

  toggle() {
    this.isResponsive = !this.isResponsive;
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
