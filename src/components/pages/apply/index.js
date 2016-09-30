import React from 'react';
import formSerialize from 'form-serialize';
import axios from 'axios';
import {withRouter} from 'react-router';
import Helmet from 'react-helmet';

import Hero from '../../modules/Hero';
import courses from '../../../config/courses';

const Apply = React.createClass({
    propTypes: {
        router: React.PropTypes.object.isRequired
    },
    _handleSubmit(e) {
        e.preventDefault();
        const data = formSerialize(e.target, {hash: true});
        axios.post('https://decode-main.herokuapp.com/api/apply', data)
            .then(({data: response}) => {
                //Multiple response options available
                if (response.status === 'success') {
                    //success, no subscription
                    this.props.router.push({pathname: '/confirmation', query: {status: 'success'}})
                } else {
                    this.props.router.push({pathname: '/confirmation', query: {status: 'failed'}})
                }
            })
            .catch(err => {
                this.props.router.push({pathname: '/confirmation', query: {status: 'failed'}})
            })
    },
    render() {
        return (
            <div>
                <Helmet
                    title="Apply to DecodeMTL | DecodeMTL"
                    meta={[
                        {property: 'description', content: 'Submit your application to DecodeMTL here.'},
                    ]}/>
                <Hero moduleTitle="Submit your" jumboTitle="Application"/>
                <section className="module">
                    <div className="wrapper">
                        <div className="module-boxed">
                            <form onSubmit={this._handleSubmit} className="application-form" action="" method="post">
                                {/* ======== contact details ======== */}
                                <section className="contact-details-section">
                                    <h3 className="module-title-medium">Contact Details</h3>
                                    <div className="required">
                                        <label htmlFor="first-name" className="visually-hidden">First Name</label>
                                        <input type="text" name="first-name" id="first-name" placeholder="First Name"
                                               aria-required={true} required/>
                                    </div>
                                    {/* /first-name */}

                                    <div className="required">
                                        <label htmlFor="last-name" className="visually-hidden">Last Name</label>
                                        <input type="text" name="last-name" id="last-name" placeholder="Last Name"
                                               aria-required={true} required/>
                                    </div>
                                    {/* /last-name */}

                                    <div className="required">
                                        <label htmlFor="tel" className="visually-hidden">Your Phone</label>
                                        <input type="tel" name="tel" id="tel" placeholder="Your Phone"
                                               aria-required={true}
                                               required/>
                                    </div>
                                    {/* /phone */}

                                    <div className="required">
                                        <label htmlFor="email" className="visually-hidden">Email</label>
                                        <input type="email" name="email" placeholder="Your email" aria-required={true}
                                               required/>
                                    </div>
                                    {/* /email */}

                                    <label htmlFor="linkedin" className="visually-hidden">LinkedIn URL</label>
                                    <input type="text" name="linkedin" id="linkedin" placeholder="LinkedIn URL"/>
                                    {/* /linkedin */}
                                </section>
                                {/* /.contact-details-section */}

                                {/* ======== course selection ======== */}
                                <section className="course-selection-section">
                                    <h3 className="module-title-medium">Course Selection</h3>
                                    <label htmlFor="course-selection">Which course are you applying to:<span
                                        className="required">*</span></label>
                                    <fieldset className="course-selection" aria-required={true}>
                                        {courses.map((course, i) => {
                                            return course.nextSessions.map(session => {
                                                return (
                                                    <div key={i + session}>
                                                        <input type="radio" name="course"
                                                               value={course.title + ' ' + course.jumboTitle + ' ' + session}
                                                               id={course.jumboTitle + session}
                                                               required/>
                                                        <label
                                                            htmlFor={course.jumboTitle + session}>{course.title} {course.jumboTitle}
                                                            ({session})</label>
                                                    </div>
                                                );
                                            });
                                        })}
                                    </fieldset>
                                    {/* /.course-selection */}
                                </section>
                                {/* /.course-selection-section */}

                                {/* ======== technical knowledge ======== */}
                                <section className="tech-background-section">
                                    <h3 className="module-title-medium">Technical Knowledge</h3>
                                    <label htmlFor="tech-background">What is your current level of technical
                                        knowledge:<span
                                            className="required">*</span></label>
                                    <select name="tech-background" id="tech-background" aria-required={true} required>
                                        <option value="">-- select --</option>
                                        <option value="Just getting started">Just getting started</option>
                                        <option value="Dabbled with a few tutorials">Dabbled with a few tutorials
                                        </option>
                                        <option value="Built an app or website">Built an app or website</option>
                                        <option value="Understand OO programming">Understand OO programming</option>
                                        <option value="Professional Developer">Professional Developer</option>
                                    </select>
                                    {/* /.technical dropdown */}
                                </section>
                                {/* /.tech-background-section */}

                                {/* ======== Goals ======== */}
                                <section className="goals-section">
                                    <h3 className="module-title-medium">Goals</h3>
                                    <label htmlFor="hopes">What do you hope to achieve after the program?</label>
                                    <fieldset className="hopes">
                                        <div>
                                            <input type="checkbox" name="hope" value="Get a job as a developer"
                                                   id="new-job"/>
                                            <label htmlFor="new-job">Get a job as a developer</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hope" value="Return to a previous job/company"
                                                   id="old-job"/>
                                            <label htmlFor="old-job">Return to a previous job/company</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hope" value="Start a company"
                                                   id="start-company"/>
                                            <label htmlFor="start-company">Start a company</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hope"
                                                   value="Go back to school / continue learning" id="learn"/>
                                            <label htmlFor="learn">Go back to school / continue learning</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="hope" value="other" id="other"/>
                                            <label htmlFor="other">Other</label>
                                        </div>
                                    </fieldset>
                                    {/* /.hopes */}
                                </section>
                                {/* /.goals-section */}

                                {/* ======== About yourself ======== */}
                                <section className="about-section">
                                    <h3 className="module-title-medium">About Yourself</h3>
                                    <label htmlFor="message">Is there anything else you would like to share with
                                        us?</label>
                                    <textarea name="message" id="message" placeholder="Anything goes…"/>
                                </section>
                                {/* /.about-section */}

                                {/* ======== submit ======== */}
                                <section className="submit-section">
                                    <div className="optin-checkbox">
                                        <input type="checkbox" name="list-optin" id="list-optin" value="yes"/>
                                        <label htmlFor="list-optin">I want to receive info about new courses, workshops
                                            and events.</label>
                                    </div>
                                    <input className="btn-large" type="submit" name="submit" value="Submit"/>
                                    <div className="foot-note text-body-small text-subtle">
                                        By providing us with your email, you agree to the terms of our <a href='#'>Privacy
                                        Policy</a> and <a href="#">Terms of Service</a>.
                                    </div>
                                </section>
                                {/* /.submit-section */}
                            </form>
                            {/* /.contact-form */}
                        </div>
                        {/* /.module-boxed */}
                    </div>
                    {/* /.wrapper */}
                </section>
            </div>
        );
    }
});


export default withRouter(Apply);