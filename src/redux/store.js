import { configureStore } from '@reduxjs/toolkit';
import authReducer from './isLoading/loadingSlice';
import loadingReducer from './isLoading/loadingSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    auth: authReducer,
    loading: loadingReducer,
  },
});
