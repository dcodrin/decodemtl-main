import React from 'react';
import {Link} from 'react-router';

export const CTASecondaryLarge = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired
    },
    render() {
        return (
            <Link to={this.props.path} className="btn-secondary btn-large">{this.props.text}</Link>
        );
    }
});

export const CTAPrimaryLarge = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired
    },
    render() {
        return (
            <Link to={this.props.path} className="btn-primary btn-large">{this.props.text}</Link>
        );
    }
});
