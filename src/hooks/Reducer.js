import React from 'react';
function Reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

export default Reducer;
