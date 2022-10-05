import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { applyMiddleware, compose, createStore } from 'redux';
export const store = configureStore({
  reducer: rootReducer,
});
