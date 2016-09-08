import React from 'react';

import HomeHero from '../modules/HomeHero';

const HomePage = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <div>
                <HomeHero/>
            </div>
        );
    }
});

export default HomePage;