import React from 'react';

export const CourseTestimonial = (props) => {
    return (
        <section className="module module-course testimonial-course">
            <div className="wrapper">
                <div className="img-text-container profile-block">
                    <div className="img-text-pic">
                        <img src={props.src} alt={props.alt}/>
                    </div>
                    <blockquote className="img-text-details">
                        <p>{props.text}<span className="credit">{props.fullName}</span>
                        </p>
                        <div className="link-more">
                            <a className="text-body-small" href="#">Meet our alumni<span className="fa fa-caret-right" aria-hidden="true"/></a>
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

CourseTestimonial.propTypes = {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string,
    text: React.PropTypes.string.isRequired,
    fullName: React.PropTypes.string.isRequired
};

export default CourseTestimonial;