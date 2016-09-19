import React from 'react';

import Hero from '../../../components/modules/Hero';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import GenericTextModule from '../../../components/modules/GenericTextModule';

import img1 from '../../../assets/images/wework6.jpg';
import img2 from '../../../assets/images/wework7.jpg';


const WeWork = (props) => {

    const firstRowContentLeft = (
        <p>Be part of the largest co-working space in Montreal. The space is buzzing with entrepreneurs, startups, and tech companies. Take part in weekly lunch and learns or network at one of the many nightly events. You may just end up meeting your future employer or business partner.</p>
    );
    const firstRowContentRight = (
        <img src={img2} alt=""/>
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
        <p>You will have access to two kitchens which include unlimited free micro roasted coffee, tea, fruit water, and beer on tap. There are phone booths to make private calls, spacious common areas and lounges, and a shuffle-board table for when you need a break.</p>
    );
    const thirdRowContentLeft = (
        <img src={img1} alt=""/>
    );

    return (
        <div>
            <Hero moduleTitle="WeWork" jumboTitle="Montreal"/>
            <OneHalfColumn mainTitle='Community' contentLeft={firstRowContentLeft} contentRight={firstRowContentRight}/>
            <GenericTextModule title="Location" paragraphs={secondRowParagraphs}/>
            <OneHalfColumn mainTitle="Amenities" contentLeft={thirdRowContentLeft} contentRight={thirdRowContentRight}/>
        </div>
    );
};

WeWork.propTypes = {};

export default WeWork;