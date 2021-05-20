import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoList from '../components/TodoList';
import {getTodo} from '../modules/todo';

const TodoContainer = () => {
    const {todo} = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const onLoad = useCallback(async () => {
        dispatch(await getTodo());
    }, [getTodo]);

    return <TodoList todo={todo} onLoad={onLoad} />;
};

export default TodoContainer;
