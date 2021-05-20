import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoList from '../components/TodoList';
import {getTodo} from '../modules/todo';

const TodoContainer = () => {
    const {data} = useSelector((state) => state.todo.todo);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const fn = async () => {
    //         dispatch(await getTodo());
    //     };
    //     fn();
    // }, [getTodo]);

    const onLoad = useCallback(async () => {
        dispatch(await getTodo());
    }, [getTodo]);

    return <TodoList todo={data} onLoad={onLoad} />;
};

export default TodoContainer;
