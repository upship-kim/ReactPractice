import React, {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREAMENT':
            return {value: state.value + 1};
        case 'DECREAMENT':
            return {value: state.value - 1};

        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    const onIncrese = () => {
        dispatch({type: 'INCREAMENT'});
    };

    const onDecrease = () => {
        dispatch({type: 'DECREAMENT'});
    };

    return (
        <div>
            <b>{state.value}</b>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;
