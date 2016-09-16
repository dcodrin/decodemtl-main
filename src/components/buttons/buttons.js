import React from 'react';
import {Link} from 'react-router';

export const CTASecondaryLarge = (props) => {
    return (
        <a href={props.path} className="btn-secondary btn-large" download={true}>{props.text}</a>
    );
};

CTASecondaryLarge.propTypes = {
    text: React.PropTypes.string.isRequired,
    path: React.PropTypes.string.isRequired
};

export const CTAPrimaryLarge = (props) => {
    return (
        <Link to={props.path} className="btn-primary btn-large">{props.text}</Link>
    );
};

CTAPrimaryLarge.propTypes = {
    text: React.PropTypes.string.isRequired,
    path: React.PropTypes.string.isRequired
};