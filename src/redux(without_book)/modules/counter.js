import React from 'react';
import {delay, put, takeEvery, takeLatest} from '@redux-saga/core/effects';
import {createAction, handleActions} from 'redux-actions';

// state : number
// action : increase, decrease

// 액션 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// redux saga 액션 정의
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// 액션 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// redux saga 액션 함수
export const increase_Async = createAction(INCREASE_ASYNC);
export const decrease_Async = createAction(DECREASE_ASYNC);

function* sagaIncrease() {
    yield delay(1000);
    yield put(increase());
}
function* sagaDecrease() {
    yield delay(1000);
    yield put(decrease());
}
export function* countSaga() {
    yield takeEvery(INCREASE_ASYNC, sagaIncrease);
    yield takeLatest(DECREASE_ASYNC, sagaDecrease);
}

//초기 값
const initState = {
    number: 0,
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({
            number: state.number + 1,
        }),
        [DECREASE]: (state, action) => ({
            number: state.number - 1,
        }),
    },
    initState
);

export default counter;
