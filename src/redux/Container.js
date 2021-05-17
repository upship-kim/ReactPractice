import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Component from './Component';
import {decrease, increase} from './module/counter';

const Container = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => {
        dispatch(increase());
    }, [dispatch]);
    const onDecrease = useCallback(() => {
        dispatch(decrease());
    }, [dispatch]);

    return (
        <Component
            number={number}
            increase={onIncrease}
            decrease={onDecrease}
        />
    );
};

export default React.memo(Container);
