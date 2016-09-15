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
           ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis cupiditate, deleniti deserunt ea eaque esse excepturi minima necessitatibus nobis obcaecati perspiciatis placeat repellat sequi sint temporibus vel voluptatum.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti distinctio eveniet modi nulla officia possimus soluta! Distinctio et eveniet harum, ipsum iste laudantium nihil, nostrum rerum soluta totam velit.',
           ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore exercitationem fuga numquam obcaecati quo, sed soluta tenetur velit? Ab aliquid eaque hic illo ipsum itaque, magni quam quidem voluptatem?'
        ];

        const p2 = [
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis cupiditate, deleniti deserunt ea eaque esse excepturi minima necessitatibus nobis obcaecati perspiciatis placeat repellat sequi sint temporibus vel voluptatum.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti distinctio eveniet modi nulla officia possimus soluta! Distinctio et eveniet harum, ipsum iste laudantium nihil, nostrum rerum soluta totam velit.',
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore exercitationem fuga numquam obcaecati quo, sed soluta tenetur velit? Ab aliquid eaque hic illo ipsum itaque, magni quam quidem voluptatem?'
        ];

        const p3 = [
           'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam, assumenda autem, eaque eos facilis laborum modi nam omnis quia quidem repellat reprehenderit tempora temporibus totam ullam. Labore, quis?',
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi commodi deserunt dicta, dolores ducimus ex molestiae necessitatibus nihil numquam possimus quo, recusandae repellat repudiandae similique, sint veniam? Autem, fuga!'
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
                <Hero moduleTitle={'montreal made'} jumboTitle={'montreal loved'} subText={'Feeding our city with tech talent'}/>
                <GenericTextModule title={'bilingual roots'} subTitle={'multicultural present'} paragraphs={p1}/>
                <GenericTextModule title={'keep it small & nimble'} paragraphs={p2}/>
                 <QuoteModule background={quoteBackground}/>
                <OneHalfColumn mainTitle={'teaching philosophy'} text={'Our goal is a good goal.'} contentLeft={contentLeft} contentRight={contentRight}/>
                <GenericTextModule title={'accessible staff'} paragraphs={p3}/>
            </div>
        );
    }
});

export default About;