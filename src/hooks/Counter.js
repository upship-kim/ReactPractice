import React, {useState} from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    const onIncrese = () => {
        setNumber(() => number + 1);
    };

    const onDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <b>{number}</b>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;
