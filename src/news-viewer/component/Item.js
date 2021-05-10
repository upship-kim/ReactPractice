import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
    /* background: green; */
    width: 90%;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    margin: 0 auto;
    img {
        width: 20%;
        border: 1px solid gray;
    }
    div {
        flex: 1;
        margin-left: 3rem;
    }
`;

const Item = ({article}) => {
    return (
        <ItemBlock>
            <img src={article.urlToImage} />
            <div>
                <h3>{article.title}</h3>
                <p>{article.description} </p>
            </div>
        </ItemBlock>
    );
};

export default Item;
