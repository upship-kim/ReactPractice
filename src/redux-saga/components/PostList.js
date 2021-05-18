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

const PhotoItem = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid red;
    text-align: center;
    /* width: 10rem; */
`;

const PostList = ({photo, post, loading, error, onLoad, onLoadPhoto}) => {
    if (loading) {
        return <div>loading...</div>;
    }
    if (error) {
        return (
            <div>
                <h2>error</h2>
                <div>{post.message}</div>
            </div>
        );
    }
    return (
        <PostListBlock>
            <button style={{width: '20%'}} onClick={() => onLoad(1)}>
                user ID 1 post 불러오기
            </button>
            <button style={{width: '20%'}} onClick={() => onLoadPhoto(1)}>
                photo 불러오기
            </button>

            {post &&
                post.map((p) => (
                    <PostItem key={p.id}>
                        <h2>{p.title}</h2>
                        <small>User ID: #{p.userId}</small>
                        <div className="body">
                            {p.body.length > 100
                                ? `${p.body.slice(0, 100)}...`
                                : p.body}
                        </div>
                    </PostItem>
                ))}

            {photo &&
                photo.map((p) => (
                    <PhotoItem key={p.title}>
                        <div>
                            <h3>{p.title}</h3>
                            <img src={p.thumbnailUrl} alt="thumnail" />
                        </div>
                    </PhotoItem>
                ))}
        </PostListBlock>
    );
};

export default PostList;
