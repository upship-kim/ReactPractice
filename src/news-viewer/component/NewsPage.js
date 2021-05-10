import React from 'react';
import ItemList from './ItemList';

const NewsPage = ({match}) => {
    console.log(match.params);
    return <ItemList category={match.params.category} />;
};

export default NewsPage;
