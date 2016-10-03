//TODO add proper id's to child elements once database is connected, usage of i is NOT recommended for keys
import React from 'react';

import {Link} from 'react-router';

const FAQ = React.createClass({
    propTypes: {
        faq: React.PropTypes.array.isRequired,
        title: React.PropTypes.string.isRequired
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
            transition: 'max-height 0.5s ease'

        };
        const showStyle = {
            maxHeight: 500,
            overflow: 'hidden',
            transition: 'max-height 1s ease-out'
        };
        return (
            <section className="module module-course faq-course">
                <div className="wrapper">
                    <h2 className="module-title">{this.props.title}</h2>
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
                                        ref={q => {this[`_${this.props.title}_answer${i}`] = q}}
                                        style={this.state.active === q.question ? showStyle : hideStyle}
                                        className="answer">
                                        {q.answer}
                                        {q.test ? q.test : null}
                                    </li>
                                </div>
                            );
                        })}

                    </ul>
                    <div className="link-more text-body-small">
                        {window.location.pathname !== '/faq' ? <Link to="/faq">View all FAQs<span className="fa fa-caret-right" aria-hidden="true"/></Link> : null}
                    </div>
                </div>
            </section>
        );
    }
});

export default FAQ;