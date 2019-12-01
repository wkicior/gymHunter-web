import {
  Action,
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
import {InjectionToken} from "@angular/core";

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

export const ROOT_REDUCER = new InjectionToken<any>('Root Reducer');

// export enum RootAction {
//   Reset = '[Root] Reset',
// }
//
// export class Reset implements Action {
//   public readonly type = RootAction.Reset;
//   constructor() {}
// }
//
//
//
// export type RootActions = Reset;
//
// export const rootReducers = (
//   state = initialAuthState,
//   action: RootActions
// ): AuthState => {
//   switch(action.type) {
//     case RootAction.Reset: {
//       return {
//         initialState
//       }
//     }
//     default:
//       return state;
//   }
// };

