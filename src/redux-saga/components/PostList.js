import React from 'react';
import styled from 'styled-components';

const PostListBlock = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
`;
const PostItem = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid gray;
    width: 80%;
    padding: 1rem;
    .body {
        margin-top: 1rem;
    }
`;

const PostList = () => {
    return (
        <PostListBlock>
            <PostItem>
                <h2>title</h2>
                <small>#userid</small>
                <div className="body">body</div>
            </PostItem>
        </PostListBlock>
    );
};

export default PostList;
