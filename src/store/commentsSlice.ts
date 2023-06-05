import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { delay, put } from 'redux-saga/effects';

import { commentsAPI } from '../api/api';

export interface ICommentItem {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface ICommentObject {
  postId: number;
  contentList: Array<ICommentItem>;
}

interface ICommentsState {
  list: Array<ICommentObject>;
  loading: boolean;
}

const initialState: ICommentsState = {
  list: [],
  loading: false,
};

export function* getCommentsSaga(action: PayloadAction<number>) {
  yield put(isLoading(true));
  yield delay(500);
  const response: AxiosResponse = yield commentsAPI.getComments(
    action.payload,
  );
  yield put(getCommentsSuccess(response.data));
  yield put(isLoading(false));
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getCommentsSuccess: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.postId === action.payload[0].postId,
      );
      index === -1 &&
        state.list.push({
          postId: action.payload[0].postId,
          contentList: action.payload,
        });
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const GET_COMMENTS = 'comments/getComments';
export const getComments: (postId: number) => {type: 'comments/getComments'} = createAction(GET_COMMENTS);

export const { getCommentsSuccess, isLoading } = commentsSlice.actions;
export default commentsSlice.reducer;
