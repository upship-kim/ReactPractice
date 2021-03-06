import React from 'react';
import qs from 'qs';
import WithRouterSample from './WithRouterSample';

const About = ({location}) => {
    const query = qs.parse(location.search, {ignoreQueryPrefix: true});
    console.log(query);
    return (
        <div>
            <h2>About...</h2>
            <p>about page입니다</p>
            {query.detail === 'true' ? <h3>query 읽기 성공?</h3> : null}
            <WithRouterSample />
        </div>
    );
};

export default About;
