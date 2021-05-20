import React from 'react';
import TodoList from './components/TodoList';
import PostContainer from './containers/PostContainer';

const SagaApp = () => {
    return (
        <div>
            <h1>saga app main</h1>
            <div>
                <PostContainer />
                <TodoList />
            </div>
        </div>
    );
};

export default SagaApp;
