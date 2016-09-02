import React from 'react';
import shortid from 'shortid';

import ImageTextBlock from './ImageTextBlock';

import iconApi from '../../assets/icons/icon-api.svg';
import iconTeam from '../../assets/icons/icon-team.svg';
import iconStrategy from '../../assets/icons/icon-strategy.svg';
import iconLearn from '../../assets/icons/icon-learn.svg';

//Dynamically load icons based on subjects' icon property
const icons = {
    iconApi,
    iconTeam,
    iconStrategy,
    iconLearn
};

const CourseCurriculum = (props) => {
    return (
        <section className="module module-course curriculum-course">
            <div className="wrapper">
                <h2 className="module-title">What will you learn?</h2>
                {props.subjects.map(subject => <ImageTextBlock key={shortid.generate()} {...subject} image={icons[subject.icon]}/>)}
            </div>
        </section>
    );
};

CourseCurriculum.propTypes = {
    subjects: React.PropTypes.array.isRequired
};


export default CourseCurriculum;