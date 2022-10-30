import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
const initialState = {
  allRoom: [],
  isfetching: false,
  content: {},
};
export const getRoomList = createAsyncThunk('room/list', async () => {
  try {
    const res = await https.get('/api/phong-thue');
    console.log('res', res);
    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
export const pushRoom = createAsyncThunk('room/push', async (data) => {
  try {
    const res = await https.post('/api/phong-thue', data);
    console.log('res', res);
    return res;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
export const deleteRoom = createAsyncThunk('room/delete', async (id) => {
  try {
    const res = await https.post(`/api/phong-thue/id=${id}`);
    console.log('res', res);
    return res;
  } catch (error) {
    message.error(error.response.data.message);
  }
});
const roomSlice = createSlice({
  name: 'room',
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
          allRoom: payload?.content,
        };
      })
      .addCase(deleteRoom.pending, (state) => {
        return {
          ...state,
          isfetching: true,
        };
      })
      .addCase(deleteRoom.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          content: payload.data.content,
        };
      });
  },
});

export const { reset } = roomSlice.actions;
export default roomSlice.reducer;
