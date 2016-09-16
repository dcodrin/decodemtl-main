import React from 'react';

const TuitionDates = React.createClass({
    propTypes: {
        startDate: React.PropTypes.string.isRequired,
        endDate: React.PropTypes.string.isRequired,
        days: React.PropTypes.string.isRequired,
        hours: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired
    },
    _formatPrice(num) {
       return '$' + num.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    },
    render() {
        return (
            <div className="row">
                <div className="cell">{this.props.startDate}—{this.props.endDate}</div>
                <div className="cell">{this.props.days}</div>
                <div className="cell">{this.props.hours}</div>
                <div className="cell">{this._formatPrice(this.props.price)}</div>
            </div>
        );
    }
});

export default TuitionDates;