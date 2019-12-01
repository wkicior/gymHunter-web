import {AuthAction} from "../auth/auth.actions";

export function clearState(reducer) {
  return function (state, action) {

    if (action.type === AuthAction.Logout) {
      state = undefined
    }

    return reducer(state, action);
  };
}
