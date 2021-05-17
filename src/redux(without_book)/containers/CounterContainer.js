import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => {
        dispatch(increase());
    }, [dispatch]);

    const onDecrease = useCallback(() => {
        dispatch(decrease());
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
