import { createSlice } from "@reduxjs/toolkit";

export interface ICommentItem {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface ICommentsState {
  list: Array<ICommentItem>;
  loading: boolean;
}

const initialState: ICommentsState = {
  list: [],
  loading: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export default commentsSlice.reducer;
