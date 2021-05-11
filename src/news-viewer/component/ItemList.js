import React, {useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {apiKey} from '../config/ApiKey';
import usePromise from '../customHook/usePromise';
import Item from './Item';
import Responsive from './Responsive';

const ItemListBlock = styled(Responsive)`
    margin-top: 2rem;
    height: max-content;
`;

const ItemList = ({category}) => {
    const [response, error, loading] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`
        );
    }, [category]);
    console.log(category);
    console.log(response);
    // eslint-disable-next-line no-unused-vars
    const {articles} = response.data;

    if (error) {
        return <ItemListBlock>data null</ItemListBlock>;
    }
    if (!response) {
        return null;
    }
    if (loading) {
        return <ItemListBlock> loading</ItemListBlock>;
    }
    return (
        <ItemListBlock>
            {articles.map((article) => (
                <Item article={article} key={article.title} />
            ))}
        </ItemListBlock>
    );
};

export default ItemList;
