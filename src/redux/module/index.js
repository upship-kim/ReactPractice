import React from 'react';
import {combineReducers} from 'redux';
import counter from '../module/counter';
import todo from '../module/todo';

const rootReducer = combineReducers({
    counter,
    todo,
});

export default rootReducer;
