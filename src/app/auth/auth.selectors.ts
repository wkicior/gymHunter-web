import {State} from "../reducers";
import {createSelector} from "@ngrx/store";
import {AuthState} from "./auth.state";

const selectAuth = (state: State) => state.authState;

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (state: AuthState) => state.isAuthenticated
);

export const selectIsLoginFailed = createSelector(
  selectAuth,
  (state: AuthState) => state.isLoginFailed
);
