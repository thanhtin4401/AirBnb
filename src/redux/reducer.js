import React from 'react';
import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';
import roomReducer from './room';
import commentReducer from './comment/commentSlice';
import managerReducer from './manager';
// compine user
const rootReducer = combineReducers({
  auth: authReducer,
  room: roomReducer,
  comment: commentReducer,
  manager: managerReducer,
});
export default rootReducer;
