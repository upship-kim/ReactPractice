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

const TodoItem = () => {
    return (
        <div>
            <input type="checkBox" checked={true} />
            <span>
                todo 내용 (<small>#userId</small>)
            </span>
        </div>
    );
};

const TodoList = () => {
    return (
        <TodoBlock>
            <TodoItem />
            <TodoItem />
        </TodoBlock>
    );
};

export default TodoList;
