import React from 'react';
import {Route, IndexRoute, Router, browserHistory, applyRouterMiddleware} from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';

import App from '../components/App';
import BootcampCourse from '../components/pages/wd_bootcamp/index';
import HtmlCssCourse from '../components/pages/pt_htmlcss/index';
import JavascriptCourse from '../components/pages/pt_javascript/index';
import Home from '../components/pages/home/index';
import AllCourses from '../components/pages/allCourses/AllCourses';



//to pass optional params place router including "/" in parentheses --> /courses(/:courseName)
//IMPORTANT: to scroll to top upon rendering children components --> useScroll
export default () => {
    return (
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='courses' component={AllCourses}>
                    <Route path='web-development-bootcamp' component={BootcampCourse}/>
                    <Route path='javascript' component={JavascriptCourse}/>
                    <Route path='html-css' component={HtmlCssCourse}/>
                </Route>
            </Route>
        </Router>
    );
};
