import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 8rem;
    background: gray;
    justify-content: center;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderBlock>
            <h2>빠르고 정확한 Upship-News</h2>
        </HeaderBlock>
    );
};

export default Header;
