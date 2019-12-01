import {Action} from "@ngrx/store";

export enum AuthAction {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailed = '[Auth] Login Failed',
  Logout = '[Logout] Logout'
}

export class Login implements Action {
  public readonly type = AuthAction.Login;
  constructor(public username: string, public password: string) {}
}

export class LoginSuccess implements Action {
  public readonly type = AuthAction.LoginSuccess;
}

export class LoginFailed implements Action {
  public readonly type = AuthAction.LoginFailed;
}

export class Logout implements Action {
  public readonly type = AuthAction.Logout;
}

export type AuthActions = Login | LoginSuccess | LoginFailed | Logout;
