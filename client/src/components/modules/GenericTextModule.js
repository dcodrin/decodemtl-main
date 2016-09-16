import React from 'react';
//TODO MAKE THE TEXT-MEASURE CLASS STANDARD ON <P> ELEMENTS

//any valid jsx can be passed to be rendered inside the <div> tags
const GenericTextModule = (props) => {
    return (
        <section className="module">
            <div className="wrapper">
                <h2 className="module-title">{props.title}<br />{props.subTitle}</h2>
                {props.paragraphs.map((p, i) => (
                    <div key={i}>{p}</div>
                ))}
            </div>
        </section>
    );
};

GenericTextModule.propTypes = {
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string,
    paragraphs: React.PropTypes.array.isRequired
};

export default GenericTextModule;