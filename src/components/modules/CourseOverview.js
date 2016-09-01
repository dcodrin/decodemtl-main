import React from 'react';

const CourseOverview = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <section className="module module-course overview-course">
                <div className="wrapper">
                    <h2 className="module-title">Overview</h2>
                    <ul className="petal-icon-list">
                        <li><span className="petal-icon" aria-hidden="true" />450+ hours over 8 weeks</li>
                        <li><span className="petal-icon" aria-hidden="true" />Intensive project based learning approach</li>
                        <li><span className="petal-icon" aria-hidden="true" />Career support to get you working ASAP</li>
                    </ul>
                </div>
            </section>
        );
    }
});

export default CourseOverview;