import React from 'react';
import {Route, IndexRoute, Router, browserHistory, applyRouterMiddleware} from 'react-router';
import {useScroll} from 'react-router-scroll'

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
import Privacy from '../components/pages/privacy_terms/Privacy';
import Terms from '../components/pages/privacy_terms/Terms';
import Apply from '../components/pages/apply/index';
import Confirmation from '../components/pages/confirmation/index';
import Success from '../components/pages/success/index';

export default () => {
    return (
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll((prevRouterProps, currRouterProps) => {

            //NOTE: In order to correctly handle nested child routes fading in and out we need to make sure
            // that useScroll is only active on top level paths.
            const prevPathname = prevRouterProps && prevRouterProps.location.pathname,
                currPathname = currRouterProps.location.pathname;
            return prevPathname && !(currPathname.includes(prevPathname) && prevPathname !== '/');
        }))}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='courses'>
                    <IndexRoute component={AllCourses}/>
                    <Route path='web-development-immersive' component={BootcampCourse}/>
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
                <Route path='privacy' component={Privacy}/>
                <Route path='terms' component={Terms}/>
                <Route path='apply' component={Apply}/>
                <Route path='confirmation' component={Confirmation}/>
                <Route path='success' component={Success}/>
            </Route>
        </Router>
    );
};