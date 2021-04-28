import React, {useState} from 'react';

const IterationSample = () => {
    const data = [
        {id: 1, text: '눈사람'},
        {id: 2, text: '라떼'},
        {id: 3, text: '커피'},
    ];
    const [name, setName] = useState(data);
    const [nextId, setNextId] = useState(data.length + 1);
    const [inputText, setInputText] = useState('');

    const Iterate = name.map((data) => (
        <li key={data.id} onClick={() => onRemove(data.id)}>
            {data.text}({data.id})
        </li>
    ));

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const onClick = () => {
        setName(name.concat({id: nextId, text: inputText}));
        setNextId(nextId + 1);
        setInputText('');
    };

    const onRemove = (id) => {
        setName(name.filter((data) => data.id !== id));
    };

    return (
        <>
            <div>
                <ul>{Iterate}</ul>
            </div>
            <div>
                <input value={inputText} onChange={onChange}></input>
                <button onClick={onClick}>올리기</button>
            </div>
        </>
    );
};

export default IterationSample;
