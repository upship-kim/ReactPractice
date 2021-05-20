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
                todo.map((todo) => (
                    <div>
                        <input type="checkBox" checked={todo.completed} />
                        <span>
                            {todo.title} (<small>#{todo.userId}</small>)
                        </span>
                    </div>
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
