import React from 'react';

const Overview = (props) => {
    return (
        <section className="module module-course overview-course">
            <div className="wrapper">
                <h2 className="module-title">{props.title}</h2>
                <ul className="petal-icon-list">
                    {props.overview.map((point, i) => (
                        <li key={i}><span className="petal-icon" aria-hidden="true"/>{point.text}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

Overview.propTypes = {
    overview: React.PropTypes.array.isRequired,
    title: React.PropTypes.string
};

export default Overview;