import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {map, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {GetTraining, GetTrainings, GetTrainingsSuccess, GetTrainingSuccess, TrainingsAction} from "./trainings.actions";
import {TrainingsService} from "./trainings.service";
import {selectClubId, selectTrainings} from "./trainings.selectors";

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
    switchMap((trainings) => of (new GetTrainingsSuccess(trainings)))
  );

  @Effect()
  getTraining$ = this.actions$.pipe(
    ofType<GetTraining>(TrainingsAction.GetTraining),
    withLatestFrom(this.store.pipe(select(selectTrainings))),
    map(([{id}, trainings]) => trainings.filter(t => t.id == id)[0]),
    switchMap((training) => of (new GetTrainingSuccess(training)))
  );
}
