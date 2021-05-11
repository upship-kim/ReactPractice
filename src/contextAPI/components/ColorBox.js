import React from 'react';
import ColorContext, {ColorCousumer} from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorCousumer>
            {(value) => (
                <>
                    <div
                        style={{
                            width: '100px',
                            height: '100px',
                            background: value.state.color,
                        }}
                    />
                    <br />
                    <div
                        style={{
                            width: '50px',
                            height: '50px',
                            background: value.state.subColor,
                        }}
                    />
                </>
            )}
        </ColorCousumer>
    );
};

export default ColorBox;
