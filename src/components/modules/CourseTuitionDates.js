import React from 'react';
import shortid from 'shortid';
import TuitionDates from '../tables/TuitionDates';

const CourseTuitionDates = (props) => {
        return (
            <section className="module module-course tuition-dates">
                <div className="wrapper module-bg-img">
                    <h2 className="module-title">Tuition & Dates</h2>
                    <div className="multi-column-table">
                        {props.tuitionDates.map((info, i) => <TuitionDates key={shortid.generate()} {...info} />)}
                    </div>
                    <p className="foot-note text-body-small">We accept students on a rolling basis. Classes always fill up so don't wait to apply.</p>
                </div>
            </section>
        );
};

CourseTuitionDates.propTypes ={
    tuitionDates: React.PropTypes.array.isRequired
};

export default CourseTuitionDates;