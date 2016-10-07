import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../../../components/modules/Hero';
import ContactForm from '../../../components/modules/ContactForm';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';

const Contact = (props) => {

    const columnLeft = (
        <ul className="contact-details-list" itemScope itemType="http://schema.org/ContactPoint">
            <li>
                <h3 className="module-title-medium">OPERATING OUT OF WEWORK<br/>MONTREAL'S ICONIC PLACE VILLE MARIE</h3>
            </li>
            <li itemScope itemType="schema.org/PostalAddress">
                <a href="https://goo.gl/maps/RmSE1PKEiXH2">
                    <span className="fa fa-map-marker fa-fw" aria-hidden="true"/>
                    <span itemProp="streetAddress">4-3 Place Ville Marie, </span>
                    <span itemProp="addressLocality">Montréal, </span>
                    <span itemProp="addressRegion">Québec </span>
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
        </ul>);

    const columnRight = (
        <img src="http://placekitten.com/600/378" alt=""/>
    );
    return (
        <div>
            <Helmet
                title="Contact | DecodeMTL"
                meta={[
                    {property: 'description', content: 'Contact DecodeMTL here.'},
                ]}/>
            <Hero moduleTitle="Questions?" jumboTitle="Contact Us"/>
            <ContactForm/>
            <OneHalfColumn contentLeft={columnLeft} contentRight={columnRight}/>
        </div>
    );
};

//todo collect data send it to hello decode

Contact.propTypes = {};

export default Contact;