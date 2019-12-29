import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {
  GetTraining,
  GetTrainings,
  GetTrainingsForSubscriptions, GetTrainingsForSubscriptionsSuccess,
  GetTrainingsSuccess,
  GetTrainingSuccess,
  TrainingsAction
} from "./trainings.actions";
import {TrainingsService} from "./trainings.service";
import {selectClubId, selectTrainings} from "./trainings.selectors";
import {selectAllSubscriptions} from "../subscription/subscriptions.selectors";

@Injectable()
export class TrainingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private trainingsService: TrainingsService
  ) {}

  @Effect()
  getTrainings$ = this.actions$.pipe(
    ofType<GetTrainings>(TrainingsAction.GetTrainings),
    withLatestFrom(this.store.pipe(select(selectClubId))),
    switchMap(([{fromDate, toDate}, clubId]) => this.trainingsService.getTrainings(clubId, fromDate, toDate)),
    map((trainings) => new GetTrainingsSuccess(trainings))
  );

  @Effect()
  getTraining$ = this.actions$.pipe(
    ofType<GetTraining>(TrainingsAction.GetTraining),
    withLatestFrom(this.store.pipe(select(selectTrainings))),
    map(([{id}, trainings]) => trainings.filter(t => t.id == id)[0]),
    map((training) => new GetTrainingSuccess(training))
  );

  @Effect()
  getTrainingsForSubscriptions = this.actions$.pipe(
    ofType<GetTrainingsForSubscriptions>(TrainingsAction.GetTrainingsForSubscriptions),
    withLatestFrom(this.store.pipe(select(selectAllSubscriptions), map(subs => subs.map(s => s.externalSystemId))), this.store.pipe(select(selectClubId))),
    switchMap(([a, ids, clubId]) => this.trainingsService.getTrainingsByIds(clubId, ids)),
    map((trainings) => new GetTrainingsForSubscriptionsSuccess(trainings))
  );
}
