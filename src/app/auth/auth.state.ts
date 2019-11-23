export interface AuthState {
  isAuthenticated: boolean;
  isLoginFailed: boolean;
  username: string;
  password: string;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  isLoginFailed: false,
  username: null,
  password: null
};
