import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {insert, remove, toggle} from './module/todo';
import TodoComponent from './TodoComponent';

const TodoContainer = () => {
    const {input, todos} = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const onInsert = useCallback(() => {
        dispatch(insert());
    }, [dispatch]);
    const onToggle = useCallback(() => {
        dispatch(toggle());
    }, [dispatch]);
    const onRemove = useCallback(() => {
        dispatch(remove());
    }, [dispatch]);

    return (
        <TodoComponent
            onInsert={onInsert}
            onRemove={onRemove}
            onToggle={onToggle}
            input={input}
            todos={todos}
        />
    );
};

export default TodoContainer;
