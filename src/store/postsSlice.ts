import { createAction, createSlice } from "@reduxjs/toolkit";
import { delay, put } from "redux-saga/effects";
import { postsAPI } from "../api/api";

export interface IPostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostState {
  list: Array<IPostItem>;
  loading: boolean;
}

const initialState: IPostState = {
  list: [],
  loading: false,
};

export function* getPostsSaga(): any {
  yield put(isLoading(true));
  yield delay(500);
  const response = yield postsAPI.getPosts();
  yield put(getPostsSuccess(response.data));
  yield put(isLoading(false));
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsSuccess: (state, action) => {
      state.list = action.payload;
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const GET_POSTS = "posts/getPosts";
export const getPosts = createAction(GET_POSTS);

export const { getPostsSuccess, isLoading } = postsSlice.actions;
export default postsSlice.reducer;
