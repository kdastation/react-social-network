import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  isAuth: boolean;
  userName: null | string;
  isLoading: boolean;
  errorMessage: string | null;
}
const initialState: IAuthState = {
  isAuth: false,
  userName: null,
  isLoading: true,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.isAuth = true;
      state.isLoading = false;
      state.errorMessage = null;
      state.userName = action.payload;
    },
    setLoadingUser(state) {
      state.isLoading = true;
    },
    setUserDataLoadingError(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
    logOutOfUserAccount(state) {
      state.isAuth = false;
      state.isLoading = false;
      state.errorMessage = null;
      state.userName = null;
    },
    disableLoadingUser(state) {
      state.isLoading = false;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const {
  logOutOfUserAccount,
  setUser,
  setUserDataLoadingError,
  setLoadingUser,
  disableLoadingUser,
  setUserName,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
