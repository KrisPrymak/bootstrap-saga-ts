import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import postsSlice from './postsSlice';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {

}

export const store = configureStore({
    reducer: {
        postsSlice,
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);