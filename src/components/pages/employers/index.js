import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../../../components/modules/Hero';
import EmployerCTA from '../../../components/modules/EmployerCTA';
import TwoThirdColumns from '../../../components/modules/TwoThirdColumns';
import FormOptin from '../../../components/modules/FormOptin';
import PartnersLogos from '../../../components/modules/PartnersLogos';

import p1 from '../../../assets/images/employers-1.jpg'
import p2 from '../../../assets/images/employers-2.jpg'
import p3 from '../../../assets/images/employers-3.jpg'

const Employers = (props) => {

    //FormOptin data
    const heroSubText = 'DecodeMTL is growing the next group of diverse and gifted developers. Let us find the perfect candidate for your team!',
        formTitle = 'Do you want to meet our graduates?',
        formText = 'Enter your email below and get notified about our next hiring event.';

    //TwoThirdColumn data
    //USE className="row-container row-two-third-container alternating" FOR TOP LEVEL DIV
    const columns = [
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>Aptitude</h4>
                <p>Once accepted into our competitive program, our students are expected to push their limits by coding 10+ hours per day, 7 days a week. Their intelligence, mixed with a strong passion for technology and persistence enable them to thrive in our course. After graduating, they are eager to bring these skills to your company.</p>
            </div>
            <div className="one-third-content">
                <img src={p2} alt="DecodeMTL Alumni Panel"/>
            </div>
        </div>),
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>Passion</h4>
                <p>Our grads have been taught to think and learn like developers. New languages are not a barrier but rather an opportunity to grow their knowledge-base. In fact, many of our graduates go on to tackle new languages in their first weeks on the job.</p>
            </div>
            <div className="one-third-content">
                <img src={p3} alt="DecodeMTL Teacher Helping Student"/>
            </div>
        </div>),
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>Team Players</h4>
                <p>Coding skills are not enough. All of our students are selected as much for their personality and communications skills as their ability to learn and execute. We know that “fit" is the key to a successful team.</p>
            </div>
            <div className="one-third-content">
                <img src={p1} alt="DecodeMTL Students Working"/>
            </div>
        </div>)

    ];

    return (
        <div>
            <Helmet
                title="Employers | DecodeMTL"
                meta={[
                    {property: 'description', content: 'Web Developers for hire! Find your next programmer at DecodeMTL! Hire our graduates as contract or full-time employees.'},
                ]}/>
            <Hero moduleTitle="find your next" jumboTitle="web developer" subText={heroSubText}/>
            <EmployerCTA/>
            <TwoThirdColumns columns={columns} title="What Makes Our Grads Special?"/>
            <FormOptin submitButton="Submit" title={formTitle} text={formText} interests={{'367df3e84b': true}}/>
            <PartnersLogos/>
        </div>
    );
};

//todo EmployerCTA mail to decode, subject line, message line
//todo link from logos same as above
Employers.propTypes = {};

export default Employers;