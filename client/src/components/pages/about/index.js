import React from 'react';

import Hero from '../../../components/modules/Hero';
import GenericTextModule from '../../../components/modules/GenericTextModule';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import QuoteModule from '../../../components/modules/QuoteModule';
import Overview from '../../../components/modules/Overview';
import Helmet from 'react-helmet';

import quoteBackground from '../../../assets/images/module-bg-about-quote.jpg';
import founders from '../../../assets/images/founders.jpg';

const About = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {

        const p1 = [
            <div>
                <p className="text-measure">Traditional schools teach in old ways, and we knew there was a better way. We want to inspire and motivate people to reach their potential, to step outside their comfort zone, and ultimately pursue work they love.</p>
                <p className="text-measure">We feel that large institutions only see their students as numbers in a database, for us, our students are our friends. Nothing makes us happier than seeing our friends succeed.</p>
            </div>
        ];

        const p2 = [

            {text: 'Quality over quantity'},
            {text: 'Passion (Both in our staff and our students)'},
            {text: 'Don’t take things to seriously (You can learn and have fun at the same time)'},
            {text: 'Outcomes (Your success is our priority)'},
            {text: 'Creativity, innovation, and hardwork'},
        ];

        const p3 = [
            <ul className="petal-icon-list">
                <li><span className="petal-icon" aria-hidden="true" />Project based teaching</li>
                <li><span className="petal-icon" aria-hidden="true" />No grades, tests, or exams</li>
                <li><span className="petal-icon" aria-hidden="true" />Learn from your mistakes</li>
                <li><span className="petal-icon" aria-hidden="true" />Your hardwork will pay off</li>
            </ul>
        ];

        const contentLeft = (
            <div>
                <p className="text-measure">Back in 2014, DecodeMTL co-founder Kevin was looking to solidify his programming skills. As an internet marketer, he needed to brush up on his web development for his professional development.</p>
                <p className="text-measure">Frustrated with the out-dated offerings from current local institutions, Kevin emailed his old colleague Ziad about running a Part-Time Front-End Course.</p>
                <p className="text-measure">Ziad had a passion for teaching, having mentored many people in the past, and jumped at the opportunity to put a course together. A few months later, DecodeMTL was born.</p>
            </div>
        );

            const contentRight = (
                <img src={founders} alt="Founders"/>
        );
        return (
            <div>
                <Helmet
                    title="About"
                    meta={[
                        {property: 'description', content: 'About'},
                    ]}/>
                <Hero moduleTitle={'made in'} jumboTitle={'montreal'} text={""} subText={''}/>
                <OneHalfColumn mainTitle={'How we started'} text={''} contentLeft={contentLeft} contentRight={contentRight}/>
                <GenericTextModule title={'Why we do it'} subTitle={''} paragraphs={p1}/>
                <Overview overview={p2} title='Our values'/>
                <QuoteModule background={quoteBackground}/>
                <GenericTextModule title={'Our teaching methodology'} paragraphs={p3}/>
            </div>
        );
    }
});

export default About;