import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  // allRoom: [],
  isfetching: false,
};

export const bookingRoom = createAsyncThunk('room/list', async (data) => {
  try {
    const res = await https.get('/api/dat-phong', data);
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
      });
  },
});

export const { reset } = bookingRoomSlice.actions;
export default bookingRoomSlice.reducer;
