import React from 'react';

import Hero from '../../../components/modules/Hero';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import GenericTextModule from '../../../components/modules/GenericTextModule';

import img1 from '../../../assets/images/wework1.jpg';


const WeWork = (props) => {

    const firstRowContentLeft = (
        <p>Be part of the largest co-working space in Montreal. The space is buzzing with entrepreneurs, startups, and tech companies. Take part in weekly lunch n' learns or network at one of the cinq à septs. You may just end up meeting your future employer or business partner.</p>
    );
    const firstRowContentRight = (
        <img src={img1} alt=""/>
    );

    const secondRowParagraphs = [
        (<p>
            WeWork's prime location in Place Ville Marie makes it extremely accessible. By metro, we are connected to both the McGill and Bonaventure stations. We are also connected to central station if coming in by train.
        </p>),
        (<p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae deserunt dignissimos, ducimus et in incidunt inventore ipsum laborum libero odit officiis omnis quaerat quidem repellendus saepe ullam vel voluptate.
        </p>)
    ];

    const thirdRowContentRight = (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at consequatur, earum esse eum ex iusto natus, nulla quod sequi tenetur ut veniam? Earum fugit quisquam similique. Maxime, vitae voluptas.</p>
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