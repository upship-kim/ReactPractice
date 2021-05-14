import React from 'react';
import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'redux/INCREASE';
const DECREASE = 'redux/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

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
