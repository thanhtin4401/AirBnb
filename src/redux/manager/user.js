import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  allUser: [],
  isfetching: false,
  content: {},
};

export const getUserList = createAsyncThunk('user/list', async () => {
  try {
    const res = await https.get('/api/users');
    console.log('res', res);
    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});

export const pushUser = createAsyncThunk('user/push', async (data) => {
  try {
    const res = await https.post('/api/users', data);
    console.log('res', res);
    return res;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
export const deleteUser = createAsyncThunk('user/delete', async (id) => {
  try {
    const res = await https.post(`/api/users/id=${id}`);
    console.log('res', res);
    return res;
  } catch (error) {
    message.error(error.response.data.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        allRoom: [],
        isfetching: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getUserList.pending, (state) => {
        return {
          ...state,
          allUser: null,
          isfetching: true,
        };
      })
      .addCase(getUserList.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          allUser: payload?.content,
        };
      })
      .addCase(pushUser.pending, (state) => {
        return {
          ...state,
          isfetching: true,
        };
      })
      .addCase(pushUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          content: payload.data.content,
        };
      })
      .addCase(pushUser.pending, (state) => {
        return {
          ...state,
          isfetching: true,
        };
      })
      .addCase(pushUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
        };
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
