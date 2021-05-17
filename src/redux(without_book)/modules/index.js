import React from 'react';
import {combineReducers} from 'redux';
import counter, {countSaga} from './counter';
import todos from './todos';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter,
    todos,
});

export function* rootSaga() {
    yield all([countSaga()]);
}

export default rootReducer;
