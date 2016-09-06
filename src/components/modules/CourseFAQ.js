//TODO add proper id's to child elements once database is connected, usage of i is NOT recommended for keys
import React from 'react';

import {Link} from 'react-router';

const CourseFAQ = React.createClass({
    propTypes: {
        faq: React.PropTypes.array.isRequired
    },
    getInitialState() {
        return {
            active: ''
        };
    },
    _handleClick(question) {
        if (this.state.active === question) {
            this.setState({
                active: ''
            });
        } else {
            this.setState({
                active: question
            })
        }
    },
    render() {
        const hideStyle = {
            overflow: 'hidden',
            maxHeight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
            transition: 'all 0.3s ease-out'

        };
        const showStyle = {
            maxHeight: 500,
            overflow: 'hidden',
            transition: 'all 0.5s ease-in'
        };
        return (
            <section className="module module-course faq-course">
                <div className="wrapper">
                    <h2 className="module-title">Bootcamp FAQ</h2>
                    <ul className="petal-icon-list accordion-list">
                        {this.props.faq.map((q, i) => {
                            return (
                                <div key={i}>
                                    <li
                                        onClick={this._handleClick.bind(this, q.question)}
                                        className="question">
                                        <span
                                            className={this.state.active === q.question ? 'petal-icon rotate' : 'petal-icon'}
                                            aria-hidden="true"/>
                                        {q.question}
                                    </li>
                                    <li
                                        style={this.state.active === q.question ? showStyle : hideStyle}
                                        className="answer">
                                        {q.answer}
                                    </li>
                                </div>
                            );
                        })}

                    </ul>
                    <div className="link-more text-body-small">
                        <Link to="#">This is a block link<span className="fa fa-caret-right" aria-hidden="true"/></Link>
                    </div>
                </div>
            </section>
        );
    }
});

export default CourseFAQ;