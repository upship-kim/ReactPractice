import {call, put, takeEvery} from '@redux-saga/core/effects';
import React from 'react';
import {createAction, handleActions} from 'redux-actions';

//액션 정의
const GET_TODO = 'todo/GET_TODO';
const GET_TODO_SUCCESS = 'todo/GET_TODO_SUCCESS';
const GET_TODO_FAILURE = 'todo/GET_TODO_FAILURE';

//액션 함수 정의
export const getTodo = createAction(GET_TODO);
const getTodoSuccess = createAction(GET_TODO_SUCCESS);
const getTodoFailure = createAction(GET_TODO_FAILURE);

//초기화
const initState = {
    loading: false,
    todo: '',
    error: false,
};

function* getTodoSaga() {
    yield put(getTodo());
    try {
        const todoData = yield call(getTodo, null);
        yield put({type: GET_TODO_SUCCESS, payload: todoData});
    } catch (e) {
        yield put({type: GET_TODO_FAILURE, payload: e});
    }
}

export function* todoSaga() {
    yield takeEvery(GET_TODO, getTodoSaga);
}

const todo = handleActions(
    {
        [GET_TODO]: (state, action) => ({
            ...state,
            loading: true,
        }),
        [GET_TODO_SUCCESS]: (state, action) => ({
            ...state,
            loading: false,
            todo: action.payload,
        }),
        [GET_TODO_FAILURE]: (state, action) => ({
            ...state,
            loading: false,
            todo: action.payload,
            error: true,
        }),
    },
    initState
);

export default todo;
