import React from 'react';
import styled from 'styled-components';

const TodoBlock = styled.div`
    margin: 0 auto;
    width: 30%;
    /* height: ; */
    border: 1px solid green;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

const TodoItem = ({todo}) => {
    return (
        <div>
            {todo &&
                todo.map((t) => (
                    <>
                        <input type="checkBox" checked={t.completed} />
                        <span>
                            {t.title} (<small>#{t.userId}</small>)
                        </span>
                    </>
                ))}
        </div>
    );
};

const TodoList = ({onLoad, todo}) => {
    return (
        <TodoBlock>
            <button onClick={() => onLoad()}>Todo 리스트 불러오기</button>
            <TodoItem todo={todo} />
        </TodoBlock>
    );
};

export default TodoList;
