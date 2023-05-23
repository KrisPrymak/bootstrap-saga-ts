import { createAction, createSlice } from "@reduxjs/toolkit";
import { IPostItem } from "./postsSlice";
import { delay, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { postsAPI, userAPI } from "../api/api";

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

interface IPostState {
  user: IUser | null;
  posts: Array<IPostItem> | null;
  loading: boolean;
}

const initialState: IPostState = {
  user: null,
  posts: null,
  loading: false,
};

export function* getUserSaga(payload: any) {
  yield put(isLoading(true));
  yield delay(500);
  const responseUser: AxiosResponse = yield userAPI.getUser(payload.payload);
  yield put(getUserSuccess(responseUser.data));
  const responsePosts: AxiosResponse = yield postsAPI.getUserPosts(payload.payload);
  yield put(getUserPostsSuccess(responsePosts.data));
  yield put(isLoading(false));
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
    },
    getUserPostsSuccess: (state, action) => {
      state.posts = action.payload;
      localStorage.setItem('currentUserPosts', JSON.stringify(action.payload));
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const GET_USER = "users/getUser";
export const getUser = createAction(GET_USER);

export const { getUserSuccess, getUserPostsSuccess, isLoading } = userSlice.actions;
export default userSlice.reducer;
