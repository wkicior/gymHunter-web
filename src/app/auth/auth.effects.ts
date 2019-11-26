import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {AuthAction, Login, LoginFailed, LoginSuccess} from "./auth.actions";
import {map, switchMap, tap} from "rxjs/operators";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private authService: AuthService
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthAction.Login),
    switchMap(({username, password}) => this.authService.login(username, password)),
    map((val) => val ? new LoginSuccess() : new LoginFailed())
  )
}
