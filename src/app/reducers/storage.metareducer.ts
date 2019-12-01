import {ActionReducer, Action} from '@ngrx/store';
import {merge, pick} from 'lodash';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

const stateKeys = ['authState.username', 'authState.password', 'authState.isAuthenticated', 'trainingsState.trainings', 'subscriptionsState'];
const localStorageKey = '__app_storage__';

export function storageMetaReducer<S, A extends Action = Action> (reducer: ActionReducer<S, A>) {
  let onInit = true; // after load/refresh…
  return function(state: S, action: A): S {
    const nextState = reducer(state, action);
    if (onInit) {
      onInit           = false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }
    if (state) {
      const stateToSave = pick(nextState, stateKeys);
      setSavedState(stateToSave, localStorageKey);
    } else {
      localStorage.clear();
    }
    return nextState;
  };
}

