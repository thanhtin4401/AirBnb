import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
