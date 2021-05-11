import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {apiKey} from './config/ApiKey';
import Categories from './component/Categories';
import Header from './component/Header';
import {Route} from 'react-router';
import NewsPage from './component/NewsPage';

const NewsApp = () => {
    return (
        <>
            <Header />
            <Categories />
            <Route path="/:category?" component={NewsPage} />
        </>
    );
};

export default NewsApp;
