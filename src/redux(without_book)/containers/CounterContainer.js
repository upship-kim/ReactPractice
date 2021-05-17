import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Counter from '../components/Counter';
import {
    increase,
    decrease,
    increase_Async,
    decrease_Async,
} from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => {
        dispatch(increase_Async());
    }, [dispatch]);

    const onDecrease = useCallback(() => {
        dispatch(decrease_Async());
    }, [dispatch]);

    return (
        <div>
            <Counter
                number={number}
                increase={onIncrease}
                decrease={onDecrease}
            />
        </div>
    );
};

export default React.memo(CounterContainer);
