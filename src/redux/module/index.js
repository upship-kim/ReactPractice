import React from 'react';
import {combineReducers} from 'redux';
import counter from '../module/counter';

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;
