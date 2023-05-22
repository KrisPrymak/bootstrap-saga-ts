import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import postsSlice, { GET_POSTS, getPostsSaga } from './postsSlice';
import { takeEvery } from "redux-saga/effects";
import commentsSlice, { GET_COMMENTS, getCommentsSaga } from "./commentsSlice";
import userSlice from './userSlice';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery(GET_COMMENTS, getCommentsSaga)
}

export const store = configureStore({
    reducer: {
        postsSlice,
        commentsSlice,
        userSlice,
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);