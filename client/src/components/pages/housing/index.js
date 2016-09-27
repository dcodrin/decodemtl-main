import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../../components/modules/Hero';
import OneHalfColumn from '../../../components/modules/OneHalfColumn';
import GenericTextModule from '../../../components/modules/GenericTextModule';

import img1 from '../../../assets/images/student-housing-1.jpg';
import img2 from '../../../assets/images/student-housing-2.jpg';


const Housing = (props) => {

    const firstRowContentLeft = (
        <div>
            <p>We've partnered with Evo, Montreal's leader in student housing to offer our students a place to stay while in Montreal. Evo offers fully furnished and move in ready rooms at very affordable rates. If you wish to learn more about Evo, you can visit their website at <a href="http://www.evomontreal.com" target="_blank">EvoMontreal.com</a>.</p>
            <p>As a DecodeMTL student, you will receive a special discounted rate on both double and single occupancy rooms. Simply mention you are a DecodeMTL student when booking.</p>
        </div>
    );
    const firstRowContentRight = (
        <img src={img1} alt=""/>
    );

    const secondRowParagraphs = [
        (<p>
            Evo's Old Montreal location on Robert Bourassa boulevard is located just a block away from us. In the winter months, it's even accessible from the underground city so you don't need to walk outside.
        </p>),
    ];

    const thirdRowContentRight = (
        <p>Staying with Evo gives you access to a handful of extras. They have a gym, a pool, a theater room, library, and shared kitchens on every floor. The building also has security, laundry, and wifi included.</p>
    );
    const thirdRowContentLeft = (
        <img src={img2} alt=""/>
    );

    return (
        <div>
            <Helmet
                title="Student Housing | DecodeMTL"
                meta={[
                    {property: 'description', content: 'Get information on EVO DecodeMTL\'s housing partner.'},
                ]}/>
            <Hero styles={{marginBottom: '3rem'}} moduleTitle="Student" jumboTitle="Housing"/>
            <OneHalfColumn mainTitle='Move-in ready housing' contentLeft={firstRowContentLeft} contentRight={firstRowContentRight}/>
            <GenericTextModule title="Walking distance from WeWork" paragraphs={secondRowParagraphs}/>
            <OneHalfColumn mainTitle="Tons of amenities" contentLeft={thirdRowContentLeft} contentRight={thirdRowContentRight}/>
        </div>
    );
};

Housing.propTypes = {};

export default Housing;