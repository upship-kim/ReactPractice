import React, {useCallback, useRef, useState} from 'react';

const ImmerApp = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({name: '', username: ''});
    const [data, setData] = useState({
        array: [],
        uselessValue: null,
    });

    const initState = {
        name: '',
        username: '',
    };

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
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username,
            };
            setData({
                ...data,
                array: data.array.concat(info),
            });
            nextId.current += 1;
            setForm(initState);
        },
        [data, form]
    );

    const onRemove = useCallback(
        (id) => {
            setData({
                ...data,
                array: data.array.filter((form) => form.id !== id),
            });
        },
        [data]
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
                {data.array.map((form) => (
                    <li key={form.id} onClick={() => onRemove(form.id)}>
                        {form.username}({form.name})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImmerApp;
