import React from 'react';
import {Link, Route} from 'react-router-dom';
import datas from './Datas';
import Profile from './Profile';

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
