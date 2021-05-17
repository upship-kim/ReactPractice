import React from 'react';
import {createAction, handleActions} from 'redux-actions';

// state : input, todos : {id, text, done },
// action : insert, toggle, remove change_input
const INSERT = 'todo/INSERT';
const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

let id = 3;
export const change_input = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT, (text) => ({
    id: id++,
    text,
    done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initState = {
    input: '',
    todos: [
        {id: 1, text: 'redux 익히기', done: false},
        {id: 2, text: 'redux 익히기2', done: true},
    ],
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({
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

export default todos;
