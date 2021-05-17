import React from 'react';

//  {id, text, done} = todo
const TodoItem = ({todos, onToggle, onRemove}) => {
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input
                        type="checkBox"
                        onClick={() => onToggle(todo.id)}
                        checked={todo.done}
                        readOnly={true}
                    />
                    <span
                        style={{
                            textDecoration: todo.done ? 'line-through' : 'none',
                        }}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => onRemove(todo.id)}>삭제</button>
                </div>
            ))}
        </>
    );
};

const TodoComponent = ({
    input,
    todos,
    onChangeInput,
    onToggle,
    onRemove,
    onInsert,
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    };
    const onChange = (e) => {
        onChangeInput(e.target.value);
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <TodoItem onToggle={onToggle} onRemove={onRemove} todos={todos} />
        </>
    );
};

export default TodoComponent;
