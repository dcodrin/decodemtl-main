import React from 'react';
import {Route, IndexRoute, Router, browserHistory, applyRouterMiddleware} from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from '../components/App';
import BootcampCourse from '../components/pages/BootcampCourse';
import Home from '../components/pages/HomePage';
import AllCourses from '../components/pages/AllCourses';


//to pass optional params place router including "/" in parentheses --> /courses(/:courseName)
export default () => {
    return (
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='courses' component={AllCourses}>
                    <Route path='bootcamp' component={BootcampCourse}/>
                    <Route path='javascript' component={BootcampCourse}/>
                </Route>
            </Route>
        </Router>
    );
};
