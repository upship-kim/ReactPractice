import React from 'react';
import ItemList from './ItemList';

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';

    return <ItemList category={category} />;
};

export default NewsPage;
