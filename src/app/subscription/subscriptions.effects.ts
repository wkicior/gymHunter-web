import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";

import {
  GetAllSubscriptions,
  GetAllSubscriptionsSuccess,
  SubscriptionsAction} from "./subscriptions.actions";
import {SubscriptionsService} from "./subscriptions.service";

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
    tap(() => console.log('bla')),
    switchMap(() => this.subscriptionsService.getAllSubscriptions()),
    switchMap((subs) => of (new GetAllSubscriptionsSuccess(subs)))
  )
}
