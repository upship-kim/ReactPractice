import React, {useContext} from 'react';
import ColorContext, {ColorConsumer} from '../contexts/color';

const ColorBox = () => {
    const {state} = useContext(ColorContext);

    return (
        <>
            {/* {(value) => ( */}
            <>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        background: state.color,
                    }}
                />
                <div
                    style={{
                        width: '200px',
                        height: '200px',
                        background: state.subColor,
                    }}
                />
            </>
            {/* )} */}
        </>
    );
};

export default ColorBox;
