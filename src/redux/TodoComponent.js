import React from 'react';

//  {id, text, done} = todo
const TodoItem = ({todos, onToggle, onRemove}) => {
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input
                        type="checkBox"
                        onClick={onToggle}
                        checked={todo.done}
                        readOnly={true}
                    />
                    <span>{todo.text}</span>
                    <button onClick={onRemove}>삭제</button>
                </div>
            ))}
        </>
    );
};

const TodoComponent = ({input, todos, onToggle, onRemove, onInsert}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert();
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <TodoItem onToggle={onToggle} onRemove={onRemove} todos={todos} />
        </>
    );
};

export default TodoComponent;
