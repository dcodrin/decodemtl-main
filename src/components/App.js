import React from 'react';
import RouteTransition from 'react-easy-transition';

import SiteNav from './navigation/SiteNav';

const App = (props) => {
    return (
        <div className="App">
            <SiteNav />
            <RouteTransition
                path={props.location.pathname}
                initialStyle={{opacity: 0}}
                transition="opacity 0.2s ease-in"
                finalStyle={{opacity: 1}}
            >
                {props.children}
            </RouteTransition>
        </div>
    );
};

App.propTypes = {
    children: React.PropTypes.element
};

export default App;
