import React from 'react';
import {createAction, handleActions} from 'redux-actions';

// state : number
// action : increase, decrease

// 액션 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

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
