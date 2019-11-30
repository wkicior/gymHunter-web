import { Component, OnInit } from '@angular/core';
import {State} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {selectAllSubscriptions, selectSelectedSubscriptions} from "../subscriptions.selectors";
import {GetSubscription, DeleteSubscription} from "../subscriptions.actions";
import {ITrainingHuntingSubscription} from "../training-hunting-subscription";
import {filter, map, tap, withLatestFrom} from "rxjs/operators";

@Component({
  selector: 'app-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.scss']
})
export class EditSubscriptionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store<State>, private router: Router) { }

  subscription$ = this.store.pipe(select(selectSelectedSubscriptions));

  ngOnInit() {
    this.store.dispatch(new GetSubscription(this.route.snapshot.params.subscriptionId));
    this.navigateToSubscriptionsOnSuccessfullyDeletedSubscription();
  }

  private navigateToSubscriptionsOnSuccessfullyDeletedSubscription() {
    // this.store.pipe(select(selectAllSubscriptions)).pipe( ///TODO: selector with param?
    //   withLatestFrom(this.subscription$),
    //   tap(x => console.log('navigate to' + JSON.stringify(x))),
    //   map(([all, current]) => all.indexOf(current) == -1),
    //   filter(removed => removed === true)
    // ).subscribe(() => this.router.navigate(['/subscriptions']));
    this.subscription$.pipe(
      filter(s => s === null)
    ).subscribe(
      () => this.router.navigate(['/subscriptions'])
    )
  }

  delete(subscription: ITrainingHuntingSubscription) {
    this.store.dispatch(new DeleteSubscription(subscription.id));
  }
}
