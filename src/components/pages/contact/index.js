import React from 'react';

import Hero from '../../../components/modules/Hero';
import ContactForm from '../../../components/modules/ContactForm';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';

const Contact = (props) => {

    const columnLeft = (
        <ul className="footer-contact-details" itemScope itemType="http://schema.org/ContactPoint">
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.3982699850253!2d-73.571533684501!3d45.50206073893735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a568e238a1d%3A0xeb66b5f6ac0dd227!2sDecodeMTL!5e0!3m2!1sen!2sca!4v1473959702619" width="600" height="360" frameBorder="0" style={{border:0, pointerEvents: window.innerWidth < 800 ? 'none' : 'auto'}} allowFullScreen></iframe>
    );
    return (
        <div>
            <Hero moduleTitle="Questions?" jumboTitle="Contact Us"/>
            <ContactForm/>
            <OneHalfColumn contentLeft={columnLeft} contentRight={columnRight}/>
        </div>
    );
};

//todo collect data send it to hello decode

Contact.propTypes = {};

export default Contact;