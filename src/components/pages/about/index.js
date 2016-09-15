import React from 'react';

import Hero from '../../../components/modules/Hero';
import GenericTextModule from '../../../components/modules/GenericTextModule';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import QuoteModule from '../../../components/modules/QuoteModule';

import quoteBackground from '../../../assets/images/module-bg-about-quote.jpg';

const About = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {

        const p1 = [
            (<p className="text-measure">Traditional schools teach in old ways, and we knew there was a better way. We want to inspire and motivate people to reach their potential, to step outside their comfort zone, and ultimately pursue work they love.</p>),
        ];

        const p2 = [
            (<p className="text-measure">Quality over quantity</p>),
            (<p className="text-measure">Passion (Both in our staff and our students)</p>),
            (<p className="text-measure">Don’t take shit to seriously (You can learn, grow and have fun at the same time)</p>),
            (<p className="text-measure">Outcomes (Your success is our priority)</p>),
            (<p className="text-measure">Creativity, innovation, and hardwork</p>),
        ];

        const p3 = [
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi cupiditate doloremque dolores doloribus ducimus enim, exercitationem fugiat inventore libero, maiores nostrum porro quae vitae voluptatem. Iusto laboriosam recusandae soluta?</p>),
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam, autem corporis cupiditate dicta dolorem ea fugit incidunt maxime nemo odio perspiciatis, porro quidem quis repellat soluta totam. Placeat, vel.</p>)
        ];

        const contentLeft = (
            <ul className="petal-icon-list">
                <li><span className="petal-icon" aria-hidden="true" />450+ hours over 8 weeks</li>
                <li><span className="petal-icon" aria-hidden="true" />Intensive project based learning approach</li>
                <li><span className="petal-icon" aria-hidden="true" />Career support to get you working ASAP</li>
                <li><span className="petal-icon" aria-hidden="true" />Career support to get you working ASAP</li>
            </ul>
        );

        const contentRight = (
            <img src="https://unsplash.it/900/540?image=0" alt=""/>
        );
        return (
            <div>
                <Hero moduleTitle={'made in'} jumboTitle={'montreal'} text={"You will learn abou them mysteries of the space"} subText={''}/>
                <GenericTextModule title={'Why we do it'} subTitle={''} paragraphs={p1}/>
                <GenericTextModule title={'We Value'} paragraphs={p2}/>
                 <QuoteModule background={quoteBackground}/>
                <OneHalfColumn mainTitle={'teaching philosophy'} text={'Our goal is a good goal.'} contentLeft={contentLeft} contentRight={contentRight}/>
                <GenericTextModule title={'accessible staff'} paragraphs={p3}/>
            </div>
        );
    }
});

export default About;