import React from 'react';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {createAction, handleActions} from 'redux-actions';
import * as api from '../lib/api';
// 액션 정의
const GET_POST = 'post/GET_POST';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

//액션 함수 정의
const getPost = createAction(GET_POST, (userId) => userId);
// const getPostSuccess = createAction(GET_POST_SUCCESS);
// const getPostFailure = createAction(GET_POST_FAILURE);

function* getPostSaga(userId) {
    yield put(getPost());
    try {
        const post = yield call(api.getPost, userId);
        yield put({type: GET_POST_SUCCESS, payload: post.data});
    } catch (e) {
        yield put({type: GET_POST_FAILURE, payload: e});
    }
}

export function* postSaga() {
    yield takeEvery('GET_POST', getPostSaga);
}

//초기화 값 정의
const initState = {
    loading: false,
    post: '',
    error: false,
};

const post = handleActions(
    {
        [GET_POST]: (state, action) => ({
            ...state,
            loading: true,
        }),
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            loading: false,
            post: action.payload,
        }),
        [GET_POST_FAILURE]: (state, action) => ({
            ...state,
            loading: false,
            post: action.payload,
            error: true,
        }),
    },
    initState
);

export default post;
