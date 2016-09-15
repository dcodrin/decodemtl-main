//TODO CHECK IF NEEDS A GLOBAL CONFIG FOR FAQ
import React from 'react';
import {Link} from 'react-router';

import Hero from '../../../components/modules/Hero';
import FAQ from '../../../components/modules/FAQ';
import GenericTextModule from '../../../components/modules/GenericTextModule';

import bootcampFaq from '../../pages/wd_bootcamp/FAQ';
import partTimeFaq from '../../pages/pt_htmlcss/FAQ';

const Faq = (props) => {
    const paragraphs = [
        (
            <p className="text-measure">No problem! If we missed something here just <Link to="/contact">shoot us an email</Link>
                <br/>
                or give us a toll-free call at 1-888-511-9155.
            </p>
        )
    ];
    return (
        <div>
            <Hero moduleTitle="got questions?" jumboTitle="get answers"/>
            <FAQ title='bootcamp' faq={bootcampFaq} />
            <FAQ title='part time' faq={partTimeFaq} />
            <GenericTextModule title="wait i still have questions!" paragraphs={paragraphs}/>
        </div>
    );
};

Faq.propTypes = {};

export default Faq;