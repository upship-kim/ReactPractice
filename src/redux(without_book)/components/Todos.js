import React from 'react';

const TodoItems = () => {
    return (
        <div>
            <input type="checkBox" />
            <span>예제 텍스트</span>
            <button>삭제</button>
        </div>
    );
};

const Todos = () => {
    return (
        <div>
            <div>
                <input />
                <button>등록</button>
            </div>
            <TodoItems />
            <TodoItems />
            <TodoItems />
        </div>
    );
};

export default Todos;
