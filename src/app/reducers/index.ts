import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AuthState, initialAuthState} from "../auth/auth.state";
import {authReducers} from "../auth/auth.reducers";

export interface State {
  authState: AuthState;
}

export const initialState = {
  authState: initialAuthState
};

export const reducers: ActionReducerMap<State> = {
  authState: authReducers
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
