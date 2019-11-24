import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {GetTrainings, GetTrainingsSuccess, TrainingsAction} from "./trainings.actions";
import {TrainingsService} from "./trainings.service";

@Injectable()
export class TrainingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private trainingsService: TrainingsService
  ) {}

  @Effect()
  getAllSubscriptions$ = this.actions$.pipe(
    ofType<GetTrainings>(TrainingsAction.GetTrainings),
    switchMap(({fromDate, toDate}) => this.trainingsService.getTrainings(fromDate, toDate)),
    switchMap((trainings) => of (new GetTrainingsSuccess(trainings)))
  )
}
