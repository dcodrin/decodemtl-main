import React from 'react';
import Hero from '../../../components/modules/Hero';

const About = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <div>
                <Hero moduleTitle={'montreal made'} jumboTitle={'montreal loved'} subText={'Feeding our city with tech talent'}/>
            </div>
        );
    }
});

export default About;