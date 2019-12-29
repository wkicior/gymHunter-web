import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {GetAllSubscriptions} from "../subscriptions.actions";
import {selectSubscribedTrainings} from "../subscriptions.selectors";
import {Router} from "@angular/router";


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private store: Store<State>, private router: Router) { }
  subscribedTrainings$ = this.store.select(selectSubscribedTrainings);

  ngOnInit() {
    this.store.dispatch(new GetAllSubscriptions());
  }

  subscriptionSelected(id: string) {
    this.router.navigate([`/subscriptions/${id}/edit`]);
  }
}
