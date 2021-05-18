import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PostList from '../components/PostList';
import {getPhoto, getPost} from '../modules/post';

const PostContainer = () => {
    const {post, photo, loading, error} = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const onLoad = useCallback(
        async (id) => {
            try {
                dispatch(await getPost(id));
            } catch (e) {}
        },
        [getPost]
    );
    const onLoadPhoto = useCallback(
        async (id) => {
            try {
                dispatch(await getPhoto(id));
            } catch (e) {}
        },
        [getPhoto]
    );

    // useEffect(() => {
    //     try {
    //         const first = async () => {
    //             dispatch(await getPost(1));
    //         };
    //         first();
    //     } catch (e) {}
    // }, [getPost]);

    return (
        <PostList
            post={post}
            photo={photo}
            loading={loading}
            error={error}
            onLoad={onLoad}
            onLoadPhoto={onLoadPhoto}
        />
    );
};

export default React.memo(PostContainer);
