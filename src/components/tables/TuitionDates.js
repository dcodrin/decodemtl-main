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
            <div className={this.props.price ? 'row' : 'row full'}>
                <div
                    className="cell">{this.props.startDate.replace(/[a-z]+$/i, '')}<sup>{this.props.startDate.match(/\d+(.*)/)[1]}</sup>
                    - {this.props.endDate.replace(/[a-z]+$/i, '')}<sup>{this.props.endDate.match(/\d+(.*)/)[1]}</sup>
                </div>
                <div className="cell">{this.props.days}</div>
                <div className="cell">{this.props.hours}</div>
                <div className="cell">{this.props.price ? this._formatPrice(this.props.price) : 'Full'}</div>
            </div>
        );
    }
});

export default TuitionDates;