import React from 'react';

import SiteNav from './navigation/SiteNav';

const App = React.createClass({
    propTypes: {
        children: React.PropTypes.element
    },
    render() {
        return (
            <div className="App">
                <SiteNav />
                {this.props.children}
            </div>
        );
    }
});



export default App;
