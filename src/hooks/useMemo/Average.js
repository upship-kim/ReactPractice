import React, {useMemo, useRef, useState} from 'react';

const getAverage = (array) => {
    console.log('...');
    if (array.length === 0) return 0;
    const sum = array.reduce((a, b) => a + b);
    return sum / array.length;
};

const Average = () => {
    const ref = useRef(null);
    const [array, setArray] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value);
    };

    const onClick = () => {
        const nextArray = array.concat(parseInt(number));
        setArray(nextArray);
        setNumber('');
        ref.current.focus();
    };

    const avg = useMemo(() => getAverage(array), [array]);
    return (
        <div>
            <input value={number} onChange={onChange} ref={ref} />
            <button onClick={onClick}>등록</button>
            <ui>
                {array.map((a, index) => (
                    <li key={index}>{a}</li>
                ))}
            </ui>
            <h2>평균값:{avg}</h2>
        </div>
    );
};

export default Average;
