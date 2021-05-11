import React from 'react';
import {ColorCousumer} from '../contexts/color';

const SelectColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'navy', 'violet'];
    return (
        <ColorCousumer>
            {(value) => (
                <>
                    <h3>색상을 선택하세요</h3>
                    <div style={{display: 'flex'}}>
                        {colors.map((color) => (
                            <div
                                key={color}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    background: color,
                                    cursor: 'pointer',
                                }}
                                onClick={() => value.actions.setColor(color)}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    value.actions.setSubColor(color);
                                }}
                            />
                        ))}
                    </div>
                    <br />
                    <hr />
                    <br />
                </>
            )}
        </ColorCousumer>
    );
};

export default SelectColor;
