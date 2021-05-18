import React from 'react';
import styled from 'styled-components';

const PostListBlock = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;

    flex-direction: column;
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

const PostList = ({post, loading, error}) => {
    return (
        <PostListBlock>
            {post.map((p) => (
                <PostItem>
                    <h2>{p.title}</h2>
                    <small>#{p.userId}</small>
                    <div className="body">{p.body}</div>
                </PostItem>
            ))}
        </PostListBlock>
    );
};

export default PostList;
