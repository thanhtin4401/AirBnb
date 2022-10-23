import React from 'react';
import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';
import roomReducer from './room';
import commentReducer from './comment/commentSlice';
// compine user
const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer,
  comment: commentReducer,
});
export default rootReducer;
