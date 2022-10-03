import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  allRoom: [],
  isfetching: false,
  pageInfor: null,
};

export const getRoomList = createAsyncThunk('room/list', async () => {
  try {
    const res = await https.get('/api/phong-thue');
    return res;
  } catch (error) {
    message.error(error.response.data.message);
  }
});

const listRoomSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        allRoom: [],
        pageInfor: '',
        isfetching: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getRoomList.pending, (state) => {
        return {
          ...state,

          allRoom: null,
          isfetching: true,
        };
      })
      .addCase(getRoomList.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          allProduct: payload.products,
        };
      });
  },
});

export const { reset } = listRoomSlice.actions;
export default listRoomSlice.reducer;
