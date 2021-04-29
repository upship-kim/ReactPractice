import React, {useCallback, useRef, useState} from 'react';
import produce from 'immer';

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
            // setForm(
            //     produce(form, (draft) => {
            //         draft[name] = value;
            //     })
            // );

            //produce() 의 첫번째 파라미터가 originState가 아닌 draft의 함수 형태이면 업데이트 함수가 반환된다.
            setForm(
                produce((draft) => {
                    draft[name] = value;
                })
            );
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
            // setData(
            //     produce(data, (draft) => {
            //         draft.array.push(info);
            //     })
            // );

            //produce() 의 첫번째 파라미터가 originState가 아닌 draft의 함수 형태이면 업데이트 함수가 반환된다.
            setData(
                produce((draft) => {
                    draft.array.push(info);
                })
            );
            nextId.current += 1;
            setForm(initState);
        },
        [data, form]
    );

    const onRemove = useCallback(
        (id) => {
            // setData(
            //     produce(data, (draft) => {
            //         draft.array.splice(
            //             draft.array.findIndex((form) => form.id === id),
            //             1
            //         );
            //     })
            // );

            //produce() 의 첫번째 파라미터가 originState가 아닌 draft의 함수 형태이면 업데이트 함수가 반환된다.
            setData(
                produce((draft) => {
                    draft.array.splice(
                        draft.array.findIndex((form) => form.id === id),
                        1
                    );
                })
            );
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
