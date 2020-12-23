import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './features/authSlice/authSlice';

export default combineReducers({
  auth: authSlice.reducer
});
