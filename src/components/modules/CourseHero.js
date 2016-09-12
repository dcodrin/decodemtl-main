import React from 'react';

//DO NOT CONVERT TO PRESENTATIONAL COMPONENT
//to attach "ref" to component the component must have state
const CourseHero = React.createClass({
    propTypes: {
        CTAP: React.PropTypes.func,
        CTAS: React.PropTypes.func,
        moduleTitle: React.PropTypes.string.isRequired,
        jumboTitle: React.PropTypes.string.isRequired,
        text: React.PropTypes.string,
        subText: React.PropTypes.string
    },
    render() {
        const {CTAP, CTAS, moduleTitle, jumboTitle, text, subText} = this.props;
        function renderButtons() {
            return (
                <div className="cta-double">
                    {CTAP ? <CTAP text="Apply Now" path="#"/> : null} {CTAS ? <CTAS path="#" text="Syllabus"/> : null}
                </div>
            );
        }
        return (
            <header className="module module-course hero-course">
                <div ref={wrapper => {
                    this._headerWrapper = wrapper
                }} className="wrapper">
                    <h1 className="module-title">{moduleTitle}<span className="module-title-jumbo">{jumboTitle}</span>
                    </h1>
                    {text ? <p className="text-body-large text-subtle">{text}</p> : null}
                    {subText ? <p className="text-body-small text-subtle">{subText}</p> : null}
                    {CTAS || CTAP ? renderButtons() : null}
                </div>
            </header>
        );
    }
});

export default CourseHero;

