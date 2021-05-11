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
    & + & {
        padding-top: 4rem;
    }
`;

const Item = ({article}) => {
    return (
        <ItemBlock>
            {article.urlToImage && (
                <>
                    {/* <a href={article.url}> */}
                    <img src={article.urlToImage} alt="thumnail" />
                    {/* </a> */}
                    <div>
                        <h3>
                            <a
                                href={article.url}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {article.title}
                            </a>
                        </h3>
                        <p>{article.description} </p>
                    </div>
                </>
            )}
        </ItemBlock>
    );
};

export default Item;
