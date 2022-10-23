import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  // allRoom: [],
  roomDetail: [],
  isfetching: false,
};

export const bookingRoom = createAsyncThunk('room/list', async (data) => {
  try {
    const res = await https.get('/api/dat-phong', data);
    message.success('dat phong thanh cong');
    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});

export const detailInfoRoom = createAsyncThunk('room/detail', async (id) => {
  try {
    const res = await https.get(`/api/phong-thue/${id}`);

    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});

const bookingRoomSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,

        isfetching: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(bookingRoom.pending, (state) => {
        return {
          ...state,

          isfetching: true,
        };
      })
      .addCase(bookingRoom.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
        };
      })
      .addCase(detailInfoRoom.pending, (state) => {
        return {
          ...state,
          roomDetail: [],
          isfetching: true,
        };
      })
      .addCase(detailInfoRoom.fulfilled, (state, { payload }) => {
        return {
          ...state,
          roomDetail: payload.content,
          isfetching: false,
        };
      });
  },
});

export const { reset } = bookingRoomSlice.actions;
export default bookingRoomSlice.reducer;
