import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  // allRoom: [],
  roomDetail: [],
  isfetching: false,
};

export const bookingRoom = createAsyncThunk('room/booking', async (data) => {
  try {
    const res = await https.post('/api/dat-phong', data);
    message.success(res.data.message);
    console.log('res:', res);
    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});

export const detailInfoRoom = createAsyncThunk('room/detail', async (id) => {
  try {
    const res = await https.get(`/api/phong-thue/${id}`);
    console.log("res.data:",res.data);
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
