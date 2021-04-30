import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

const datas = [
    {
        id: 'data1',
        name: '마우스',
    },
    {
        id: 'data2',
        name: '키보드',
    },
    {
        id: 'data3',
        name: '모니터',
    },
];

const Profiles = () => {
    return (
        <div>
            <h2>Profile page입니다</h2>
            <ul>
                {datas.map((data, index) => {
                    const link = `/profiles/${data.id}`;
                    return (
                        <li>
                            <Link key={index} to={link}>
                                {data.id} 의 프로필
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Route path="/profiles/:id" component={Profile} />
        </div>
    );
};

export default Profiles;
