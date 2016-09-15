import React from 'react';

import Hero from '../../../components/modules/Hero';
import ContactForm from '../../../components/modules/ContactForm';
import TwoThirdColumns from '../../../components/modules/TwoThirdColumns';

import map from '../../../assets/images/map.png';

const Contact = (props) => {

    //width was modified to make map larger
    const columns = [
        (<div className="row-container row-two-third-container alternating">
            <div style={{width: 'calc(50% - 1rem)'}} className="two-third-content">
                <ul className="footer-contact-details" itemScope itemType="http://schema.org/ContactPoint">
                    <li>
                        <h3 className="module-title-medium">OPERATING OUT OF WEWORK<br/>MONTREAL'S ICONIC PLACE VILLE MARIE</h3>
                    </li>
                    <li itemScope itemType="schema.org/PostalAddress">
                        <a href="https://goo.gl/maps/RmSE1PKEiXH2">
                            <span className="fa fa-map-marker fa-fw" aria-hidden="true"/>
                            <span itemProp="streetAddress">3 Place Ville Marie,</span>
                            <span itemProp="addressLocality">Montréal,</span>
                            <span itemProp="addressRegion">Québec</span>
                            <span itemProp="postalCode">H3B 2E3</span>
                        </a>
                    </li>
                    <li>
                        <a itemProp="telephone" href="tel:1-888-511-9155"><span
                            className="fa fa-phone fa-fw" aria-hidden="true"/> 1-888-511-9155</a>
                    </li>
                    <li>
                        <a itemProp="email" href="mailto:hello@decodemtl.com"><span
                            className="fa fa-envelope fa-fw" aria-hidden="true"/> hello@decodemtl.com</a>
                    </li>
                </ul>
            </div>
            <div style={{width: 'calc(50% - 1rem)'}} className="one-third-content">
                <img src={map} alt="" />
            </div>
        </div>)
    ];

    return (
        <div>
            <Hero moduleTitle="we love it when folks" jumboTitle="reach out"/>
            <ContactForm/>
            <TwoThirdColumns columns={columns}/>
        </div>
    );
};

Contact.propTypes = {};

export default Contact;