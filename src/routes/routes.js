import React from 'react';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

import App from '../components/App';
import Courses from '../components/pages/Courses';
import Home from '../components/pages/HomePage';


//to pass optional params place router including "/" in parentheses --> /courses(/:courseName)
export default () => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='courses(/:courseName)' component={Courses}>
                    <Route path='full-stack-bootcamp' component={Courses}/>
                    <Route path='intro-javascript' component={Courses}/>
                </Route>
            </Route>
        </Router>
    );
};
