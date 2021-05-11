import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Responsive from './Responsive';

const categoryList = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '연예',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '테크',
    },
];

const CategoryBlock = styled(Responsive)`
    display: flex;
    position: relative;
    flex-direction: row;
    list-style: none;
    justify-content: space-around;
    margin-top: 2rem;
`;

const Category = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    &.active {
        background: #ffffff;
        color: black;
        border-bottom: 2px blueviolet solid;
    }
`;

const Categories = () => {
    return (
        <CategoryBlock>
            {categoryList.map((i) => (
                <Category
                    key={i.name}
                    activeClassName="active"
                    exact={i.name === 'all'}
                    to={i.name === 'all' ? '/' : `/${i.name}`}
                >
                    {i.text}
                </Category>
            ))}
        </CategoryBlock>
    );
};

export default Categories;
