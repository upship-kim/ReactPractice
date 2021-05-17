import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeInput, insert, remove, toggle} from './module/todo';
import TodoComponent from './TodoComponent';

const TodoContainer = () => {
    const {input, todos} = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const onInsert = useCallback(
        (text) => {
            dispatch(insert(text));
        },
        [dispatch]
    );
    const onToggle = useCallback(
        (id) => {
            dispatch(toggle(id));
        },
        [dispatch]
    );
    const onRemove = useCallback(
        (id) => {
            dispatch(remove(id));
        },
        [dispatch]
    );

    const onChangeInput = useCallback(
        (input) => {
            dispatch(changeInput(input));
        },
        [dispatch]
    );

    return (
        <TodoComponent
            onInsert={onInsert}
            onRemove={onRemove}
            onToggle={onToggle}
            onChangeInput={onChangeInput}
            input={input}
            todos={todos}
        />
    );
};

export default React.memo(TodoContainer);
