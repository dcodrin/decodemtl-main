//TODO add proper id's to child elements once database is connected, usage of i is NOT recommended for keys
import React from 'react';
import TuitionDates from '../tables/TuitionDates';

const CourseTuitionDates = (props) => {
        return (
            <section className="module module-course tuition-dates">
                <div style={props.background ? {backgroundImage: 'url(' + props.background + ')'} : null} className="wrapper module-bg-img">
                    <h2 className="module-title">Tuition & Dates</h2>
                    <div className="multi-column-table">
                        {props.tuitionDates.map((info, i) => <TuitionDates key={i} {...info} />)}
                    </div>
                </div>
            </section>
        );
};

CourseTuitionDates.propTypes ={
    tuitionDates: React.PropTypes.array.isRequired,
    background: React.PropTypes.string
};

export default CourseTuitionDates;