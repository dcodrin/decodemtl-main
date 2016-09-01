import React from 'react';

export const CurriculumIcon = (props) => {
    return (
        <div className="icon" aria-hidden="true">
            <img src={props.src} alt={props.alt}/>
        </div>
    );
};

CurriculumIcon.propTypes = {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string
};
CurriculumIcon.defaultProps = {
    alt: ''
};