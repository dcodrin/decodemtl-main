import React from 'react';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

import App from '../components/App';
import Courses from '../components/pages/Courses';
import Home from '../components/pages/HomePage';

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="courses" component={Courses}/>
            </Route>
        </Router>
    );
};
