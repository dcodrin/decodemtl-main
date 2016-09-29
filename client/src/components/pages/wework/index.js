import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../../../components/modules/Hero';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import GenericTextModule from '../../../components/modules/GenericTextModule';

import img1 from '../../../assets/images/about_wework1.jpg';
import img2 from '../../../assets/images/about_wework2.jpg';


const WeWork = (props) => {

    const firstRowContentLeft = (
        <div>
            <p>Be a part of the largest co-working space in Montreal. The space is buzzing with entrepreneurs, startups, and tech companies. Take part in weekly lunch and learns or network at one of the many nightly events. You may just end up meeting your future employer or business partner.</p>
            <p>DecodeMTL is strategically located inside of WeWork for these reasons. We want you to be a part of the Montreal startup and technology ecosystem, and build as many connections in the community as possible.</p>
        </div>
    );
    const firstRowContentRight = (
        <img src={img2} alt="DecodeMTL at WeWork"/>
    );

    const secondRowParagraphs = [
        (<p>
            WeWork's prime location in Place Ville Marie makes it extremely accessible. By metro, we are connected to both the McGill and Bonaventure stations. By train, we are connected to central station. Private bike storage and indoor parking are also available for a fee.
        </p>),
        (<p>
            Being in the heart of downtown, you will be within walking distance from an abundance of restaurants, shopping and entertainment. We are also connected to the underground city, so you can avoid stepping outside in the middle of winter!
        </p>)
    ];

    const thirdRowContentRight = (
        <div>
            <p>You will have access to two kitchens which include unlimited free micro roasted coffee, tea, fruit water, and beer on tap. There are phone booths to make private calls, spacious common areas and lounges, and a shuffle-board table for when you need a break.</p>
            <p>As a student, you will be given 24/7 access to the space. If you like to come in on weekends, or stay late in the evenings, we encourage you to do so!</p>
            <p>To learn more about WeWork you can check out their website at <a href="https://www.wework.com/" target="_blank"> WeWork.com</a>.</p>
        </div>
    );
    const thirdRowContentLeft = (
        <img src={img1} alt="DecodeMTL at WeWork"/>
    );

    return (
        <div>
            <Helmet
                title="WeWork | DecodeMTL"
                meta={[
                    {property: 'description', content: 'Get information about WeWork, DecodeMTL\'s location partner.'}
                ]}/>
            <Hero moduleTitle="WeWork" jumboTitle="Montreal"/>
            <OneHalfColumn mainTitle='Community' contentLeft={firstRowContentLeft} contentRight={firstRowContentRight}/>
            <GenericTextModule title="Location" paragraphs={secondRowParagraphs}/>
            <OneHalfColumn mainTitle="Amenities" contentLeft={thirdRowContentLeft} contentRight={thirdRowContentRight}/>
        </div>
    );
};

WeWork.propTypes = {};

export default WeWork;