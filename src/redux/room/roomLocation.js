import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  allLocation: [],
  isfetching: false,
};

export const getLocationList = createAsyncThunk('location/list', async () => {
  try {
    const res = await https.get('/api/vi-tri');
    return res.data;
  } catch (error) {
    message.error(error.response.data.message);
  }
});

const listLocationSlice = createSlice({
  name: 'room/location',
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
      .addCase(getLocationList.pending, (state) => {
        return {
          ...state,

          allRoom: null,
          isfetching: true,
        };
      })
      .addCase(getLocationList.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          allLocation: payload.content,
        };
      });
  },
});

export const { reset } = listLocationSlice.actions;
export default listLocationSlice.reducer;
