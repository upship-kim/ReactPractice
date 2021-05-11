import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {apiKey} from '../config/ApiKey';
import Item from './Item';
import Responsive from './Responsive';

const ItemListBlock = styled(Responsive)`
    margin-top: 2rem;
    height: max-content;
`;

const ItemList = ({category}) => {
    //     const [response, error, loading] = usePromise(() => {
    //         const query = category === 'all' ? '' : `&category=${category}`;
    //         return axios.get(
    //             `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`
    //         );
    //     }, [category]);
    //     console.log(category);
    //     console.log(response);
    //     const {articles} = response.data;

    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const result = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`
                );
                setArticle(result.data.articles);
                console.log(article);
            } catch (e) {
                return (
                    <ItemListBlock>
                        <Item> error</Item>
                    </ItemListBlock>
                );
            }

            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    if (!article) {
        return null;
    }
    if (loading) {
        return <ItemListBlock> loading</ItemListBlock>;
    }
    return (
        <ItemListBlock>
            {article.map((article) => (
                <Item article={article} key={article.title} />
            ))}
        </ItemListBlock>
    );
};

export default ItemList;
