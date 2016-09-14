import React from 'react';

import Hero from '../../../components/modules/Hero';
import FormOptin from '../../../components/modules/FormOptin';
import UpcomingEvents from '../../../components/modules/UpcomingEvents';

import events from '../../../config/events';

const Events = (props) => {
    const formTitle = 'Don\'t miss a single event!',
        formText = 'Sign up to our newsletter!';

    return (
        <div>
            <Hero moduleTitle="decodemtl" jumboTitle="events" subText="We love to host and attend events!"/>
            <UpcomingEvents events={events} />
            <FormOptin submitButton="Keep me posted" title={formTitle} text={formText} />
        </div>
    );
};

Events.propTypes = {};

export default Events;