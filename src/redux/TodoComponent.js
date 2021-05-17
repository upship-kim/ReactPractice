import React from 'react';

const TodoItem = () => {
    return (
        <div>
            <input type="checkBox" />
            <span>예제 텍스트</span>
            <button>삭제</button>
        </div>
    );
};

const TodoComponent = () => {
    return (
        <>
            <form>
                <input />
                <button type="submit">등록</button>
            </form>
            <TodoItem />
        </>
    );
};

export default TodoComponent;
