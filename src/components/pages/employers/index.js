import React from 'react';
import Hero from '../../../components/modules/Hero';
import EmployerCTA from '../../../components/modules/EmployerCTA';
import TwoThirdColumns from '../../../components/modules/TwoThirdColumns';
import FormOptin from '../../../components/modules/FormOptin';
import PartnersLogos from '../../../components/modules/PartnersLogos';

const Employers = (props) => {

    //FormOptin data
    const heroSubText = 'DecodeMTL is growing the next group of diverse and gifted developers. Let us find the perfect candidate for your team!',
        formTitle = 'Come see what our grands can do at Demo Day!',
        formText = 'Curious about our program? Put more text......';

    //TwoThirdColumn data
    //USE className="row-container row-two-third-container alternating" FOR TOP LEVEL DIV
    const columns = [
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>Rigor</h4>
                <p>Each one of our grads has gone against the grain and made sacrifices in order to get through our program. They are ready and eager to take on the challenges your company has waiting for them.</p>
            </div>
            <div className="one-third-content">
                <img src="https://unsplash.it/600/360?image=0" alt="" />
            </div>
        </div>),
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>Rigor</h4>
                <p>Each one of our grads has gone against the grain and made sacrifices in order to get through our program. They are ready and eager to take on the challenges your company has waiting for them.</p>
            </div>
            <div className="one-third-content">
                <img src="https://unsplash.it/600/360?image=0" alt="" />
            </div>
        </div>),
        (<div className="row-container row-two-third-container alternating">
            <div className="two-third-content">
                <h4>Rigor</h4>
                <p>Each one of our grads has gone against the grain and made sacrifices in order to get through our program. They are ready and eager to take on the challenges your company has waiting for them.</p>
            </div>
            <div className="one-third-content">
                <img src="https://unsplash.it/600/360?image=0" alt="" />
            </div>
        </div>)

    ];


    return (
        <div>
            <Hero moduleTitle="find your next" jumboTitle="web developer" subText={heroSubText}/>
            <EmployerCTA/>
            <TwoThirdColumns columns={columns} title="What Makes Our Grads Special?"/>
            <FormOptin submitButton="Let me know" title={formTitle} text={formText} />
            <PartnersLogos/>
        </div>
    );
};

Employers.propTypes = {};

export default Employers;