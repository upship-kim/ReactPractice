import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Component from './Component';
import {decrease, increase} from './module/counter';

const Container = () => {
    const dispatch = useDispatch();

    const number = useSelector((state) => state.counter.number);
    const onIncrease = () => {
        dispatch(increase);
    };
    const onDecrease = () => {
        dispatch(decrease);
    };
    return (
        <Component
            increase={onIncrease}
            decrease={onDecrease}
            number={number}
        />
    );
};

export default Container;
