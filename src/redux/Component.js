import React from 'react';

const buttonStyle = {
    width: '6rem',
};

const Component = ({number, increase, decrease}) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button style={buttonStyle} onClick={increase}>
                    +1
                </button>
                <button style={buttonStyle} onClick={decrease}>
                    -1
                </button>
            </div>
        </div>
    );
};

export default Component;
