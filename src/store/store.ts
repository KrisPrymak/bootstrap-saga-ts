import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import postsSlice, { GET_POSTS, getPostsSaga } from './postsSlice';
import { takeEvery } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
    yield takeEvery(GET_POSTS, getPostsSaga)
}

export const store = configureStore({
    reducer: {
        postsSlice,
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);