import React from 'react';

//DO NOT CONVERT TO PRESENTATIONAL COMPONENT
//to attach "ref" to component the component must have state
const Hero = React.createClass({
    propTypes: {
        CTAP: React.PropTypes.func,
        CTAS: React.PropTypes.func,
        CTAPText: React.PropTypes.string,
        CTASText: React.PropTypes.string,
        CTAPLink: React.PropTypes.string,
        CTASLink: React.PropTypes.string,
        moduleTitle: React.PropTypes.string.isRequired,
        jumboTitle: React.PropTypes.string.isRequired,
        text: React.PropTypes.string,
        subText: React.PropTypes.string
    },
    render() {
        const {CTAP, CTAPText, CTAS, CTASText,  moduleTitle, jumboTitle, text, subText, CTAPLink, CTASLink} = this.props;
        function renderButtons() {
            return (
                <div className="cta-double">
                    {CTAP ? <CTAP text={CTAPText} path={CTAPLink}/> : null} {CTAS ? <CTAS path={CTASLink} text={CTASText}/> : null}
                </div>
            );
        }
        return (
            <header style={this.props.styles || null} className="module module-course hero-course">
                <div ref={wrapper => {
                    this._headerWrapper = wrapper
                }} className="wrapper">
                    <h1 className="module-title">{moduleTitle}<span className="module-title-jumbo">{jumboTitle}</span>
                    </h1>
                    {text ? <p className="text-body-large text-subtle text-measure">{text}</p> : null}
                    {subText ? <p className="text-body-small text-subtle text-measure">{subText}</p> : null}
                    {CTAS || CTAP ? renderButtons() : null}
                </div>
            </header>
        );
    }
});

export default Hero;

