import React from 'react';
import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';

// compine user
const rootReducer = combineReducers({
  auth: authReducer,
});
export default rootReducer;
