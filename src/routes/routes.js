import React from 'react';
import {Route, Router, browserHistory} from 'react-router';

import App from '../components/App';
import Courses from '../components/pages/Courses';

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="courses" component={Courses}/>
            </Route>
        </Router>
    );
};
