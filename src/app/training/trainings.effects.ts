import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {switchMap, tap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {GetTrainings, GetTrainingsSuccess, TrainingsAction} from "./trainings.actions";
import {TrainingsService} from "./trainings.service";
import {selectClubId} from "./trainings.selectors";

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
    withLatestFrom(this.store.pipe(select(selectClubId))),
    switchMap(([{fromDate, toDate}, clubId]) => this.trainingsService.getTrainings(clubId, fromDate, toDate)),
    switchMap((trainings) => of (new GetTrainingsSuccess(trainings)))
  )
}
