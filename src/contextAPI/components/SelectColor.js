import React, {useContext} from 'react';
import ColorContext, {ColorConsumer} from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'violet'];

const SelectColor = () => {
    const {actions} = useContext(ColorContext);
    return (
        <>
            {/* {({actions}) => ( */}
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
                            onClick={() => actions.setColor(color)}
                            onContextMenu={(e) => {
                                actions.setSubColor(color);
                                e.preventDefault();
                            }}
                        />
                    ))}
                </div>
                <div style={{height: '4rem'}} />
                <hr />
            </>
            {/* )} */}
        </>
    );
};

export default SelectColor;
