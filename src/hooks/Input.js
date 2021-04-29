import React, {useReducer} from 'react';
import Reducer from './Reducer';

const Input = () => {
    const [form, dispatch] = useReducer(Reducer, {name: '', email: ''});
    const {name, email} = form;

    const onChange = (e) => {
        dispatch(e.target);
    };

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
