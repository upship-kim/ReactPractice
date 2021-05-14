import React from 'react';

const buttonStyle = {
    width: '6rem',
};

const Component = ({number, increase, decrease}) => {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2>{number}</h2>
                <button style={buttonStyle} onClick={increase}>
                    +1
                </button>
                <button style={buttonStyle} onClick={decrease}>
                    -1
                </button>
            </div>
        </>
    );
};

export default Component;
