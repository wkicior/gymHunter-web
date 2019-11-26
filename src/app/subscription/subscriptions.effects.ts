import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";

import {
  GetAllSubscriptions,
  GetAllSubscriptionsSuccess, Subscribe, SubscribeSuccess,
  SubscriptionsAction
} from "./subscriptions.actions";
import {SubscriptionsService} from "./subscriptions.service";
import {selectClubId, selectSelectedTraining} from "../training/trainings.selectors";
import {SubscriptionRequest} from "./subscription-request";


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
  createNewSubscription = this.actions$.pipe(
    ofType<Subscribe>(SubscriptionsAction.Subscribe),
    withLatestFrom(this.store.select(selectSelectedTraining), this.store.select(selectClubId)),
    map(([{autoBookingDeadline}, training, clubId]) => <SubscriptionRequest> {
      externalSystemId: training.id,
      autoBookingDeadline: autoBookingDeadline,
      huntingDeadline: training.start_date,
      clubId: clubId
    }),
    switchMap(request => this.subscriptionsService.subscribe(request)),
    switchMap((sub) => of (new SubscribeSuccess(sub)))
  );
}
