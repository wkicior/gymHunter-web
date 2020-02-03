import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {map, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {of, throwError} from "rxjs";

import {
  DeleteSubscription, DeleteSubscriptionSuccess,
  GetAllSubscriptions,
  GetAllSubscriptionsSuccess, GetSubscription, GetSubscriptionSuccess, Subscribe, SubscribeSuccess,
  SubscriptionsAction
} from "./subscriptions.actions";
import {SubscriptionsService} from "./subscriptions.service";
import {selectClubId, selectSelectedTraining} from "../training/trainings.selectors";
import {SubscriptionRequest} from "./subscription-request";
import {selectAllSubscriptions} from "./subscriptions.selectors";
import {GetTrainingsForSubscriptions} from "../training/trainings.actions";


@Injectable()
export class SubscriptionsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private subscriptionsService: SubscriptionsService
  ) {}

  @Effect()
  getAllSubscriptions$ = this.actions$.pipe(
    ofType<GetAllSubscriptions>(SubscriptionsAction.GetAllSubscriptions),
    switchMap(() => this.subscriptionsService.getAllSubscriptions()),
    switchMap((subs) => of (new GetAllSubscriptionsSuccess(subs)))
  );

  @Effect()
  getAllSubscriptionsSuccess$ = this.actions$.pipe(
    ofType<GetAllSubscriptionsSuccess>(SubscriptionsAction.GetAllSubscriptionsSuccess),
    map(() => new GetTrainingsForSubscriptions())
  );

  @Effect()
  getSubscription$ = this.actions$.pipe(
    ofType<GetSubscription>(SubscriptionsAction.GetSubscription),
    withLatestFrom(this.store.select(selectAllSubscriptions)),
    map(([{id}, subs]) => subs.filter(s => s.id === id)),
    map(s => s.length != 1 ? throwError(`Could not find subscription`): new GetSubscriptionSuccess(s[0]))
  );

  @Effect()
  deleteSubscription$ = this.actions$.pipe(
    ofType<DeleteSubscription>(SubscriptionsAction.DeleteSubscription),
    switchMap((subscription) => this.subscriptionsService.deleteSubscription(subscription.id)),
    map(deletedSubscription => new DeleteSubscriptionSuccess(deletedSubscription))
  );

  @Effect()
  createNewSubscription = this.actions$.pipe(
    ofType<Subscribe>(SubscriptionsAction.Subscribe),
    withLatestFrom(this.store.select(selectSelectedTraining), this.store.select(selectClubId)),
    map(([{autoBookingDeadline}, training, clubId]) => <SubscriptionRequest> {
      externalSystemId: training.id,
      autoBookingDeadline: autoBookingDeadline,
      huntingDeadline: training.start_date,
      clubId: clubId,
      huntingStartTime: training.bookings_open_at
    }),
    switchMap(request => this.subscriptionsService.subscribe(request)),
    switchMap((sub) => of (new SubscribeSuccess(sub)))
  );
}
