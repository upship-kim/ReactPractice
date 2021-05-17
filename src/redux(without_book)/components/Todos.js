import React from 'react';

const TodoItems = ({todos, onToggle, onRemove}) => {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input
                        type="checkBox"
                        onClick={() => onToggle(todo.id)}
                        checked={todo.done}
                        readOnly={true}
                    />
                    <span>{todo.text}</span>
                    <button onClick={() => onRemove(todo.id)}>삭제</button>
                </div>
            ))}
        </div>
    );
};

const Todos = ({input, todos, onInsert, onRemove, onToggle, onChangeInput}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    };

    const onChange = (e) => {
        onChangeInput(e.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <TodoItems todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </div>
    );
};

export default Todos;
