import axios from 'axios';
import React, {useState} from 'react';

const NewsApp = () => {
    const [data, setData] = useState('');

    const onClick = async () => {
        console.log('click');
        const result = await axios.get(
            'https://jsonplaceholder.typicode.com/todos/1'
        );
        setData(result.data);
    };

    return (
        <>
            <button onClick={onClick}>불러오기</button>
            {data && (
                <textarea value={JSON.stringify(data, null, 2)} rows={7} />
            )}
        </>
    );
};

export default NewsApp;
