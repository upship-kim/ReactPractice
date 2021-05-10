import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {apiKey} from './config/ApiKey';
import Categories from './component/Categories';
import Header from './component/Header';
import {Route} from 'react-router';
import NewsPage from './component/NewsPage';

const NewsApp = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        async function aa() {
            const result = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=${apiKey}`
            );
            setData(result.data.articles);
        }
        aa();
    }, []);

    return (
        <>
            <Header />
            <Categories />
            {/* <textarea
                value={JSON.stringify(data, null, 2)}
                rows={7}
                readOnly={true}
            /> */}
            <Route path="/:category?" component={NewsPage} />
        </>
    );
};

export default NewsApp;
