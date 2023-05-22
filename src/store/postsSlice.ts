import { createSlice } from "@reduxjs/toolkit";

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

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
