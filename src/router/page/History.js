import React, {useEffect} from 'react';

const History = ({history}) => {
    const onBack = () => {
        history.goBack(-1);
    };
    const onHome = () => {
        history.push('/');
    };

    // useEffect(() => {
    //     const unblock = history.block('정말?');
    //     return () => {
    //         unblock();
    //     };
    // }, [history]);
    useEffect(() => {
        const block = history.block('진짜?');
        return () => {
            block();
        };
    }, [history]);

    return (
        <div>
            <button onClick={onBack}>뒤로가기</button>
            <button onClick={onHome}>홈으로 가기</button>
        </div>
    );
};

export default History;
