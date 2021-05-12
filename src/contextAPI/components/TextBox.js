import React, {useContext} from 'react';
import ColorContext from '../contexts/color';

const TextBox = () => {
    const {state} = useContext(ColorContext);

    return (
        <div>
            <h1 style={{color: state.color}}>main color: {state.color}</h1>
            <h2 style={{color: state.subColor}}>sub color: {state.subColor}</h2>
        </div>
    );
};

export default TextBox;
