import React from 'react';
import {combineReducers} from 'redux';
import post, {postSaga} from './post';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    post,
});

export function* rootSaga() {
    yield all([postSaga()]);
}

export default rootReducer;
