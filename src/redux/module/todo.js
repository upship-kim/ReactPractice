import React from 'react';
import {createAction, handleActions} from 'redux-actions';

//input이 바뀔때, 등록, 토글, 삭제

//액션 정의
const CHANGEINPUT = 'todo/CHANGEINPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

//액션함수
const changeInput = createAction(CHANGEINPUT, (input) => input);
let id = 3;
const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));
const toggle = createAction(TOGGLE, (id) => id);
const remove = createAction(REMOVE, (id) => id);

const initState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 테스트',
            done: false,
        },
        {
            id: 2,
            text: '리덕스 쉽다 ~',
            done: true,
        },
    ],
};

const todo = handleActions(
    {
        [CHANGEINPUT]: (state, action) => ({
            ...state,
            input: action.payload,
        }),
        [INSERT]: (state, action) => ({
            ...state,
            todos: state.todos.concat(action.payload),
        }),
        [TOGGLE]: (state, action) => ({
            ...state,
            todos: state.todos.map((todo) =>
                todo.id === action.payload ? {...todo, done: !todo.done} : todo
            ),
        }),
        [REMOVE]: (state, action) => ({
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
        }),
    },
    initState
);

export {insert, remove, toggle, changeInput};
export default todo;
