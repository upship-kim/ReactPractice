import React from 'react';
import {combineReducers} from 'redux';
import post, {photoSaga, postSaga} from './post';
import todo, {todoSaga} from './todo';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    post,
    todo,
});

export function* rootSaga() {
    yield all([postSaga(), photoSaga(), todoSaga()]);
}

export default rootReducer;
