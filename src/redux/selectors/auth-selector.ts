import { IAuthState } from "../reducers/auth-reducer";
import { rootState } from "../store";

class AuthSelector {
  static getIsAuthStatus(state: rootState): boolean {
    const auth: IAuthState = state.auth;
    return auth.isAuth;
  }

  static getUserName(state: rootState): string | null {
    const auth: IAuthState = state.auth;
    return auth.userName;
  }

  static getErrorMessage(state: rootState): string | null {
    const auth: IAuthState = state.auth;
    return auth.errorMessage;
  }

  static getLoadingStatus(state: rootState): boolean {
    const auth: IAuthState = state.auth;
    return auth.isLoading;
  }
}

export { AuthSelector };
