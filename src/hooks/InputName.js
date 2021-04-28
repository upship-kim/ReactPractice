import React, {useEffect, useState} from 'react';

const InputName = () => {
    const [name, setName] = useState('');
    const [nic, setNik] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeNik = (e) => {
        setNik(e.target.value);
    };

    useEffect(() => {
        console.log('마운트 될 때 실행되요');
        return () => {
            console.log('언마운트 직전 ?? 이나 업데이트 직전??');
        };
    }, []);

    return (
        <div>
            <input value={name} onChange={onChangeName} />
            <input value={nic} onChange={onChangeNik} />
            <br />
            이름: <h2>{name}</h2>
            닉네임: <h3>{nic}</h3>
        </div>
    );
};

export default InputName;
