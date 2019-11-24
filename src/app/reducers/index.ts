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
import {initialSubscriptionsState, SubscriptionsState} from "../subscription/subscriptions.state";
import {subscriptionsReducers} from "../subscription/subscriptions.reducers";
import {initialTrainingsState, TrainingsState} from "../training/trainings.state";
import {trainingsReducers} from "../training/trainings.reducers";

export interface State {
  authState: AuthState;
  subscriptionsState: SubscriptionsState;
  trainingsState: TrainingsState;
}

export const initialState = {
  authState: initialAuthState,
  subscriptionsState: initialSubscriptionsState,
  trainingsState: initialTrainingsState
};

export const reducers: ActionReducerMap<State> = {
  authState: authReducers,
  subscriptionsState: subscriptionsReducers,
  trainingsState: trainingsReducers
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
