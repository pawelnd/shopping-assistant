import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './features/authSlice/auth.slice';

export default combineReducers({
  auth: authSlice.reducer
});
