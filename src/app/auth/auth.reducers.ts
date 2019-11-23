import {AuthState, initialAuthState} from "./auth.state";
import {AuthAction, AuthActions} from "./auth.actions";

export const authReducers = (
  state = initialAuthState,
    action: AuthActions
): AuthState => {
  switch(action.type) {
    case AuthAction.Login: {
     return {
       ...state,
       username: action.username,
       password: action.password,
       isLoginFailed: false
     }
    }
    case AuthAction.LoginSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        isLoginFailed: false
      }
    }
    case AuthAction.LoginFailed: {
      return {
        ...state,
        isAuthenticated: false,
        isLoginFailed: true
      }
    }
    default:
      return state;
  }
};
