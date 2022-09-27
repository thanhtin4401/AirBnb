import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { https } from '../../services/axiosClient';
import { localStorageService } from '../../services/localStorageService';

const initialState = {
  accessToken: null,
  isloading: false,
  isLoggedIn: !!localStorageService.user.get(),
};
//LOGIN
export const loginUser = createAsyncThunk('auth/loginUser', async (user, thunkAPI) => {
  try {
    const res = await https.post('/api/login', user);
    localStorageService.user.set();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
