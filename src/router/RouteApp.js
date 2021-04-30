import React from 'react';
import {Route, Switch} from 'react-router';
import {Link} from 'react-router-dom';
import About from './page/About';
import History from './page/History';
import Home from './page/Home';
import Profiles from './page/Profiles';

const RouteApp = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">home으로 이동</Link>
                </li>
                <li>
                    <Link to="/about">about으로 이동</Link>
                </li>
                <li>
                    <Link to="/about?detail=true">
                        about 인데 datail = true으로 이동
                    </Link>
                </li>
                <li>
                    <Link to="/profiles">profile로 이동</Link>
                </li>
                <li>
                    <Link to="/history">history 이동</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path={['/', '/home']} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={History} />
                <Route
                    render={({location}) => (
                        <div>
                            요청하신 페이지를 찾을 수가 없어 (
                            <small>
                                <b>{location.pathname}</b> 이 뭐람..
                            </small>
                            )
                        </div>
                    )}
                />
            </Switch>
        </>
    );
};

export default RouteApp;
