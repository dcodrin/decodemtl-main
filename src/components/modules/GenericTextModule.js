import React from 'react';

const GenericTextModule = (props) => {
    return (
        <section className="module">
            <div className="wrapper">
                <h2 className="module-title">{props.title}<br />{props.subTitle}</h2>
                {props.paragraphs.map((p, i) => (
                    <p className="text-measure" key={i}>{p}</p>
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