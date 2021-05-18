import React from 'react';
import {createAction, handleActions} from 'redux-actions';

// 액션 정의
const GET_POST = 'post/GET_POST';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

//액션 함수 정의
const getPost = createAction(GET_POST);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

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
            error: true,
        }),
    },
    initState
);

export {getPost, getPostSuccess, getPostFailure};
export default post;
