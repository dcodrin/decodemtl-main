//TODO CHECK IF NEEDS A GLOBAL CONFIG FOR FAQ
import React from 'react';


import Hero from '../../../components/modules/Hero';
import FAQ from '../../../components/modules/FAQ';
import GenericTextModule from '../../../components/modules/GenericTextModule';

import {bootcampFAQ, partTimeFAQ} from '../../../config/globalFAQ';

const Faq = (props) => {
    const paragraphs = [
        (
            <p className="text-measure">No problem! If we missed something here just <span className="read-more"><a itemProp="email" href="mailto:hello@decodemtl.com">shoot us an email</a></span>
                <br/>
                or give us a toll-free call at  <span className="read-more"><a itemProp="telephone" href="tel:1-888-511-9155">1-888-511-9155</a></span>.
            </p>
        )
    ];
    return (
        <div>
            <Hero moduleTitle="got questions?" jumboTitle="get answers"/>
            <FAQ title='bootcamp' faq={bootcampFAQ} />
            <FAQ title='part time' faq={partTimeFAQ} />
            <GenericTextModule title="wait i still have questions!" paragraphs={paragraphs}/>
        </div>
    );
};

Faq.propTypes = {};

export default Faq;