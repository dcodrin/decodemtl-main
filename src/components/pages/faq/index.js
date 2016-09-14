//TODO CHECK IF NEEDS A GLOBAL CONFIG FOR FAQ
import React from 'react';

import Hero from '../../../components/modules/Hero';
import FAQ from '../../../components/modules/FAQ';
import bootcampFaq from '../../pages/wd_bootcamp/FAQ';
import partTimeFaq from '../../pages/pt_htmlcss/FAQ';
const Faq = (props) => {
    return (
        <div>
            <Hero moduleTitle="got questions?" jumboTitle="get answers"/>
            <FAQ title='bootcamp' faq={bootcampFaq} />
            <FAQ title='part time' faq={partTimeFaq} />
        </div>
    );
};

Faq.propTypes = {};

export default Faq;