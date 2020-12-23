import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLoggedUser } from './auth.api';
import { User } from './auth.model';
import type { AppThunk } from '../../store.types';

type LoggedUserState = {
  isLoggedIn: boolean;
} & User;

const state: LoggedUserState = {
  isLoggedIn: false,
  name: null,
  email: null,
  photoUrl: null
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: state,
  reducers: {
    getLoggedUserSuccess(state, action: PayloadAction<User>) {
      const { name, email, photoUrl } = action.payload;
      state.name = name;
      state.email = email;
      state.photoUrl = photoUrl;
      state.isLoggedIn = true;
    },
    getLoggedUserFailure(state) {
      state.name = null;
      state.email = null;
      state.photoUrl = null;
      state.isLoggedIn = false;
    }
  }
});

const { getLoggedUserSuccess, getLoggedUserFailure } = authSlice.actions;

export const checkLoggedUser = (): AppThunk => async (dispatch) => {
  try {
    const user = await getLoggedUser();
    dispatch(getLoggedUserSuccess(user));
  } catch (err) {
    dispatch(getLoggedUserFailure());
  }
};
