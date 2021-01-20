import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './auth.model';

type LoggedUserState = {
  isLoggedIn: boolean;
  isLoading: boolean;
  loggedUser?: User;
};

const state: LoggedUserState = {
  isLoading: true,
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: state,
  reducers: {
    getLoggedUserStart(state) {
      state.isLoggedIn = false;
      state.isLoading = true;
    },
    getLoggedUserSuccess(state, action: PayloadAction<User>) {
      const { name, email, photoUrl } = action.payload;
      state.loggedUser = {
        name,
        email,
        photoUrl
      };
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    getLoggedUserFailure(state) {
      state.loggedUser = undefined;
      state.isLoggedIn = false;
      state.isLoading = false;
    }
  }
});

export const { getLoggedUserStart, getLoggedUserSuccess, getLoggedUserFailure } = authSlice.actions;
