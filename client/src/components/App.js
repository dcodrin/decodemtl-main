import React from 'react';
import RouteTransition from 'react-easy-transition';

import SiteNav from './navigation/SiteNav';
import Footer from './navigation/MainFooter';

const App = (props) => {
    return (
        <div className="App">
            <SiteNav />
            <RouteTransition
                path={props.location.pathname}
                initialStyle={{opacity: 0}}
                transition="opacity 110ms ease-in"
                finalStyle={{opacity: 1}}
                className="main-content" role="main"
            >
                {props.children}
            </RouteTransition>
            <Footer/>
        </div>
    );
};

App.propTypes = {
    children: React.PropTypes.element
};

export default App;
