import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    on_loading(state) {
      state.isLoading = true;
    },
    off_loading(state) {
      state.isLoading = false;
    },
  },
});

export const { on_loading, off_loading } = loadingSlice.actions;
export default loadingSlice.reducer;
