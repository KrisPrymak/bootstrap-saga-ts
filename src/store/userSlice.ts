import { createSlice } from "@reduxjs/toolkit";
import { IPostItem } from "./postsSlice";

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

interface IUser {
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
    posts: Array<IPostItem> | null
    loading: boolean;
  }

const initialState: IPostState = {
    user: null,
    posts: null,
    loading: false,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer;