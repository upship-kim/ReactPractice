import React, {useReducer} from 'react';
import useInputs from './Reducer';
import Reducer from './Reducer';

const Input = () => {
    const [state, onChange] = useInputs({name: '', email: ''});
    const {name, email} = state;

    return (
        <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="email" value={email} onChange={onChange} />
            <b>{name}</b>
            {email}
        </div>
    );
};

export default Input;
