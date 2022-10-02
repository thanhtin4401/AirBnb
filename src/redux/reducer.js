import React from 'react';
import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';
import loadingReducer from './isLoading/loadingSlice';

// compine user
const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
});
export default rootReducer;
