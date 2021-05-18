import React from 'react';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {createAction, handleActions} from 'redux-actions';
import * as api from '../lib/api';
// 액션 정의
const GET_POST = 'post/GET_POST';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

const GET_PHOTO = 'post/GET_PHOTO';
const GET_PHOTO_SUCCESS = 'post/GET_PHOTO_SUCCESS';
const GET_PHOTO_FAILURE = 'post/GET_PHOTO_FAILURE';

//액션 함수 정의
export const getPost = createAction(GET_POST, (userId) => userId);
// const getPostSuccess = createAction(GET_POST_SUCCESS);
// const getPostFailure = createAction(GET_POST_FAILURE);

export const getPhoto = createAction(GET_PHOTO, (id) => id);

function* getPostSaga(action) {
    // yield put(getPost());
    try {
        const post = yield call(api.getPost, action.payload);
        console.log(post);
        yield put({type: GET_POST_SUCCESS, payload: post.data});
    } catch (e) {
        yield put({type: GET_POST_FAILURE, payload: e});
    }
}

function* getAlbumSaga(action) {
    try {
        const album = yield call(api.getAlbum, action.payload);
        console.log(album);
        yield put({type: GET_PHOTO_SUCCESS, payload: album.data});
    } catch (e) {
        yield put({type: GET_PHOTO_FAILURE, payload: e});
    }
}

export function* postSaga() {
    yield takeEvery(GET_POST, getPostSaga);
}
export function* photoSaga() {
    yield takeEvery(GET_PHOTO, getAlbumSaga);
}

//초기화 값 정의
const initState = {
    loading: false,
    post: '',
    photo: '',
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

        [GET_PHOTO]: (state, action) => ({
            ...state,
            loading: true,
        }),
        [GET_PHOTO_SUCCESS]: (state, action) => ({
            ...state,
            photo: action.payload,
            loading: false,
        }),
        [GET_PHOTO_FAILURE]: (state, action) => ({
            ...state,
            photo: action.payload,
            loading: false,
            error: true,
        }),
    },
    initState
);

export default post;
