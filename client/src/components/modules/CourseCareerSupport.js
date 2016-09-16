import React from 'react';
import strategy from '../../assets/icons/icon-strategy.svg';
import learn from '../../assets/icons/icon-learn.svg';
import team from '../../assets/icons/icon-team.svg';


const CourseCareerSupport = (props) => {
    return (
        <section className="module module-course career-support">
            <div className="wrapper">
                <div className="module-boxed">
                    <h2 className="module-title">Career Support</h2>
                    <p>Your path from beginner to employed web developer starts here. If you’re looking to jump into a career in tech our team will work with you from day one.</p>

                    <div className="img-text-container icon-block">
                        <div className="icon" aria-hidden="true">
                            <img src={strategy} alt=""/>
                        </div>
                        <div className="img-text-details icon-details">
                            <h4>Personalized Approach</h4>
                            <p>Tell us your ultimate goal, and we will work together to create a plan of action.</p>
                        </div>
                    </div>
                    {/* ./icon-block */}
                    <div className="img-text-container icon-block">
                        <div className="icon" aria-hidden="true">
                            <img src={learn} alt=""/>
                        </div>
                        <div className="img-text-details icon-details">
                            <h4>Learn and Build</h4>
                            <p>Learn job relevant skills, build a portfolio of projects, get resume help, and practice mock interviews.</p>
                        </div>
                    </div>
                    {/* ./icon-block */}
                    <div className="img-text-container icon-block">
                        <div className="icon" aria-hidden="true">
                            <img src={team} alt=""/>
                        </div>
                        <div className="img-text-details icon-details">
                            <h4>Network Placement</h4>
                            <p>Get personalized introductions to hiring companies and attend networking events.</p>
                        </div>
                    </div>
                    {/* ./icon-block */}

                </div>
                {/* /.module-boxed */}
                <div className="info-block info-block-centered info-block-red" itemScope itemType="http://schema.org/ContactPoint">
                    <p>Want to know more about your future career options? Give us a call!</p>
                    <a className="phone-link" itemProp="telephone" href="tel:1-888-511-9155">1-888-511-9155</a>
                </div>
            </div>
            {/* /.wrapper */}
        </section>
    );
};

CourseCareerSupport.propTypes = {};

export default CourseCareerSupport;