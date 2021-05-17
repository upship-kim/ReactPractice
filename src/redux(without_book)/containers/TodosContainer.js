import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {change_input, insert, remove, toggle} from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = () => {
    const {input, todos} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onChangeInput = useCallback(
        (input) => {
            dispatch(change_input(input));
        },
        [dispatch]
    );

    const onInsert = useCallback(
        (text) => {
            dispatch(insert(text));
        },
        [dispatch]
    );

    const onRemove = useCallback(
        (id) => {
            dispatch(remove(id));
        },
        [dispatch]
    );
    const onToggle = useCallback(
        (id) => {
            dispatch(toggle(id));
        },
        [dispatch]
    );

    return (
        <div>
            <Todos
                todos={todos}
                input={input}
                onInsert={onInsert}
                onRemove={onRemove}
                onToggle={onToggle}
                onChangeInput={onChangeInput}
            />
        </div>
    );
};

export default React.memo(TodosContainer);
