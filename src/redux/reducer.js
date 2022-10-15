import React from 'react';
import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';
import roomReducer from './room';
// compine user
const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer,
});
export default rootReducer;
