import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {GetAllSubscriptions} from "../subscriptions.actions";
import {selectAllSubscriptions} from "../subscriptions.selectors";
import {Router} from "@angular/router";
import {GetTrainingsForSubscriptions} from "../../training/trainings.actions";
import {selectSubscribedTrainings} from "../../training/trainings.selectors";
import {SubscribedTrainingsService} from "../subscribed-trainings.service";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private store: Store<State>, private router: Router, private subscribedTrainingsService: SubscribedTrainingsService) { }

  //subscriptions$ = this.store.select(selectAllSubscriptions);
  subscribedTrainings$ = this.subscribedTrainingsService.selectSubscribedTrainings();

  ngOnInit() {
    //this.store.dispatch(new GetAllSubscriptions());
    //this.subscriptions$.subscribe(() => this.store.dispatch(new GetTrainingsForSubscriptions()));
  }

  subscriptionSelected(id: string) {
    this.router.navigate([`/subscriptions/${id}/edit`]);
  }
}
