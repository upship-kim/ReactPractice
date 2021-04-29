import React, {useCallback, useRef, useState} from 'react';

const ImmerApp = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({name: '', username: ''});
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });

    //input 수정을 위한 함수
    const onChange = useCallback(
        (e) => {
            const {name, value} = e.target;
            setForm({
                ...form,
                [name]: value,
            });
        },
        [form]
    );

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setData({
                ...data,
                array: data.array.concat({...form}),
            });
        },
        [data, form]
    );

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <ul>
                {data.array.map((form, index) => (
                    <li key={index}>
                        {form.username}({form.name})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImmerApp;
