import React from 'react';
import {Route, IndexRoute, Router, browserHistory, applyRouterMiddleware} from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';

import App from '../components/App';
import BootcampCourse from '../components/pages/wd_bootcamp/index';
import HtmlCssCourse from '../components/pages/pt_htmlcss/index';
import JavascriptCourse from '../components/pages/pt_javascript/index';
import Home from '../components/pages/home/index';
import About from '../components/pages/about/index';
import AllCourses from '../components/pages/allCourses/index';
import Employers from '../components/pages/employers/index';
import Events from '../components/pages/events/index';
import Faq from '../components/pages/faq/index';
import Contact from '../components/pages/contact/index';
import WeWork from '../components/pages/wework/index';
import Housing from '../components/pages/housing/index';


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
                <Route path='about' component={About}/>
                <Route path='employers' component={Employers}/>
                <Route path='events' component={Events}/>
                <Route path='faq' component={Faq}/>
                <Route path='contact' component={Contact}/>
                <Route path='wework' component={WeWork}/>
                <Route path='housing' component={Housing}/>
            </Route>
        </Router>
    );
};
