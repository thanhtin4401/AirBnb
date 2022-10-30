import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  roomDetail: [],
  price: 0,
  isfetching: false,
  isBookingSuccess: false,
};

export const bookingRoom = createAsyncThunk('room/booking', async (data) => {
  try {
    const res = await https.post('/api/dat-phong', data);

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
        roomDetail: [],
        price: 0,
        isBookingSuccess: false,
        isfetching: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(bookingRoom.pending, (state) => {
        return {
          ...state,
          isBookingSuccess: false,
          isfetching: true,
        };
      })
      .addCase(bookingRoom.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          isBookingSuccess: true,
        };
      })
      .addCase(detailInfoRoom.pending, (state) => {
        return {
          ...state,

          isfetching: true,
        };
      })
      .addCase(detailInfoRoom.fulfilled, (state, { payload }) => {
        return {
          ...state,
          roomDetail: payload.content,
          price: payload.content.giaTien,
          isfetching: false,
        };
      });
  },
});

export const { reset } = bookingRoomSlice.actions;
export default bookingRoomSlice.reducer;
