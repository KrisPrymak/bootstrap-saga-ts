import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import postsSlice, { GET_POSTS, getPostsSaga } from './postsSlice';
import commentsSlice, { GET_COMMENTS, getCommentsSaga } from './commentsSlice';
import userSlice, { GET_USER, getUserSaga } from './userSlice';


const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_COMMENTS, getCommentsSaga);
  yield takeEvery(GET_USER, getUserSaga);
}

export const store = configureStore({
  reducer: {
    postsSlice,
    commentsSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
