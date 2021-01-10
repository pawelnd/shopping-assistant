import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './auth.model';

type LoggedUserState = {
  isLoggedIn: boolean;
  isLoading: boolean;
} & User;

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
      state.name = name;
      state.email = email;
      state.photoUrl = photoUrl;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    getLoggedUserFailure(state) {
      state.name = undefined;
      state.email = undefined;
      state.photoUrl = undefined;
      state.isLoggedIn = false;
      state.isLoading = false;
    }
  }
});

export const { getLoggedUserStart, getLoggedUserSuccess, getLoggedUserFailure } = authSlice.actions;
