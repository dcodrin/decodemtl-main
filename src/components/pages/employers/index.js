import React from 'react';
import Hero from '../../../components/modules/Hero';
import EmployerCTA from '../../../components/modules/EmployerCTA';
import TwoThirdColumns from '../../../components/modules/TwoThirdColumns';
import FormOptin from '../../../components/modules/FormOptin';
import PartnersLogos from '../../../components/modules/PartnersLogos';

const Employers = (props) => {
    const heroSubText = "DecodeMTL is growing the next group of diverse and gifted developers. Let us find the perfect candidate for your team!";
    return (
        <div>
            <Hero moduleTitle="find your next" jumboTitle="web developer" subText={heroSubText}/>
            <EmployerCTA/>
            <TwoThirdColumns/>
            <FormOptin title='put something here' text="put something else here" submitButton="and submit.."/>
            <PartnersLogos/>
        </div>
    );
};

Employers.propTypes = {};

export default Employers;