import React from 'react';

import Hero from '../../../components/modules/Hero';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import GenericTextModule from '../../../components/modules/GenericTextModule';

import img1 from '../../../assets/images/wework1.jpg';


const WeWork = (props) => {

    const firstRowContentLeft = (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at consequatur, earum esse eum ex iusto natus, nulla quod sequi tenetur ut veniam? Earum fugit quisquam similique. Maxime, vitae voluptas.</p>
    );
    const firstRowContentRight = (
        <img src={img1} alt=""/>
    );

    const secondRowParagraphs = [
        (<p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae deserunt dignissimos, ducimus et in incidunt inventore ipsum laborum libero odit officiis omnis quaerat quidem repellendus saepe ullam vel voluptate.
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
            <Hero moduleTitle="we're going" jumboTitle="downtown"/>
            <OneHalfColumn mainTitle='your text here' contentLeft={firstRowContentLeft} contentRight={firstRowContentRight}/>
            <GenericTextModule title="some sort of title here" paragraphs={secondRowParagraphs}/>
            <OneHalfColumn mainTitle="put the title on" contentLeft={thirdRowContentLeft} contentRight={thirdRowContentRight}/>
        </div>
    );
};

WeWork.propTypes = {};

export default WeWork;