import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
    
}

export const store = configureStore({
    reducer: {

    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);