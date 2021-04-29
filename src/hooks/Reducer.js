import React, {useReducer} from 'react';
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

export default function useInputs(initForm) {
    const [state, dispatch] = useReducer(reducer, initForm);
    const onChange = (e) => {
        dispatch(e.target);
        console.log(e.target);
    };
    return [state, onChange];
}
