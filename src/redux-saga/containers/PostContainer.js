import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PostList from '../components/PostList';
import {getPost} from '../modules/post';

const PostContainer = () => {
    const {post, loading, error} = useSelector((state) => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const first = async () => {
                dispatch(await getPost(1));
            };
            first();
        } catch (e) {}
    }, [getPost]);

    return <PostList post={post} loading={loading} error={error} />;
};

export default PostContainer;
