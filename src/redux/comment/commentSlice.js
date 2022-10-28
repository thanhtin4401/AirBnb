import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { https } from '../../services/axiosClient';
/** State **/
const initialState = {
  allComment: [],
  commentSuccess: false,
  isfetching: false,
};

export const getCommentUser = createAsyncThunk('user/comment-list', async (id) => {
  try {
    const res = await https.get(`api/binh-luan/lay-binh-luan-theo-phong/${id}`);

    return res.data;
  } catch (error) {
    // message.error(error.response.data.message);
    console.log(error);
  }
});
export const postCommentUser = createAsyncThunk('user/comment-post', async (comment) => {
  try {
    const res = await https.post(`api/binh-luan`, comment);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const listCommentSlice = createSlice({
  name: 'user/list',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        allComment: [],
        isfetching: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getCommentUser.pending, (state) => {
        return {
          ...state,
          allComment: null,
          isfetching: true,
        };
      })
      .addCase(getCommentUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          allComment: payload?.content,
        };
      })
      .addCase(postCommentUser.pending, (state) => {
        return {
          ...state,

          isfetching: true,
        };
      })
      .addCase(postCommentUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isfetching: false,
          commentSuccess: true,
        };
      });
  },
});

export const { reset } = listCommentSlice.actions;
export default listCommentSlice.reducer;
