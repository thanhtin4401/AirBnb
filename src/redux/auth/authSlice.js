import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
import { localStorageService } from '../../services/localStorageService';

const initialState = {
  accessToken: null,
  isloading: false,
  isLoggedIn: !!localStorageService.get('USER'),
};

//LOGIN
export const loginUser = createAsyncThunk('auth/loginUser', async (user, thunkAPI) => {
  try {
    const res = await https.post('/api/auth/signin', user);
    localStorageService.set('accessToken', res.data.content.token);
    localStorageService.set('USER', res.data.content);
    message.success('login success');

    return res.data;
  } catch (error) {
    console.log(error);
    message.error('Login fail');
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: true,
          accessToken: payload.token,
          isLoggedIn: !!payload,
        };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: true,
          accessToken: payload.token,
          isLoggedIn: !!payload,
        };
      });
  },
});
// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions;

export default authSlice.reducer;
