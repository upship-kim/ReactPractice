import React from 'react';
import TodoList from './components/TodoList';
import PostContainer from './containers/PostContainer';
import TodoContainer from './containers/TodoContainer';

const SagaApp = () => {
    return (
        <div>
            <h1>saga app main</h1>
            <div>
                <PostContainer />
                <TodoContainer />
            </div>
        </div>
    );
};

export default SagaApp;
