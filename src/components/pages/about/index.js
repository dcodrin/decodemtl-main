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
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis cupiditate, deleniti deserunt ea eaque esse excepturi minima necessitatibus nobis obcaecati perspiciatis placeat repellat sequi sint temporibus vel voluptatum.</p>),
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam autem consequatur, consequuntur deleniti dolore est et eum facilis fugit, id laborum nam quidem quis quo soluta. Eum, vero.</p>),
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut maiores omnis porro qui. Delectus dolorem doloribus hic labore laudantium odit quaerat, quo sapiente suscipit tenetur unde voluptate? Exercitationem, laudantium quos!</p>)
        ];

        const p2 = [
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, asperiores autem, culpa cumque dolor enim ex excepturi itaque magnam nam natus nemo nihil numquam, sequi suscipit ut voluptates. Quis, tempore!</p>),
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur corporis cupiditate, deleniti deserunt ea eaque esse excepturi minima necessitatibus nobis obcaecati perspiciatis placeat repellat sequi sint temporibus vel voluptatum.</p>),
            (<p className="text-measure">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur error obcaecati suscipit voluptates. Delectus, dicta eius ex praesentium quam quis repellendus reprehenderit sint veniam voluptatum? Architecto, enim, inventore. Iusto.</p>)
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