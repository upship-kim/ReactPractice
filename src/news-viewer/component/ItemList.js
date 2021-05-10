import axios from 'axios';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {apiKey} from '../config/ApiKey';
import usePromise from '../customHook/usePromise';
import Item from './Item';
import Responsive from './Responsive';

const ItemListBlock = styled(Responsive)`
    margin-top: 2rem;
    height: max-content;
`;

const article = {
    source: {
        id: null,
        name: 'Yna.co.kr',
    },
    author: '김남권',
    title: '기업구조혁신펀드 1조 추가 조성…신생·소형 운용사도 참여 - 연합뉴스',
    description:
        '(서울=연합뉴스) 김남권 기자 = 금융위원회는 1조원 규모의 기업구조혁신펀드를 추가로 조성한다고 10일 밝혔다.',
    url: 'https://www.yna.co.kr/view/AKR20210510063000002',
    urlToImage:
        'https://img9.yna.co.kr/etc/inner/KR/2021/05/10/AKR20210510063000002_01_i_P4.jpg',
    publishedAt: '2021-05-10T03:00:09Z',
    content:
        "(=) = 1 10 . \r\n (19) . \r\n (675) (···) ·(·) 4510 . \r\n5500 1 . \r\n 32(1 16400·2 15300) 38 17600 .\r\n 3 · '' . \r\n · ( 750) . \r\n 50% 40%, (PDF) 50%, (PEF) 60% . \r\n 2 PDF (· ) . \r\n 18 6 . \r\n[ ]\r\nkong79@yna.… [+38 chars]",
};

const ItemList = ({category}) => {
    const [resolve, error, loading] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`
        );
    }, [category]);
    console.log(resolve);
    return (
        <ItemListBlock>
            <Item article={article} />
            <Item article={article} />
            <Item article={article} />
            <Item article={article} />
            <Item article={article} />
        </ItemListBlock>
    );
};

export default ItemList;
