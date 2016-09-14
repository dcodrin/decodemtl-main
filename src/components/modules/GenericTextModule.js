import React from 'react';

const GenericTextModule = (props) => {
    return (
        <section className="module">
            <div className="wrapper">
                <div className="full-width-content">
                    <h2 className="module-title">{props.title}<br />{props.subTitle}</h2>
                    {props.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
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