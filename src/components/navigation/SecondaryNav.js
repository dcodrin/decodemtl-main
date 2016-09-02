import React from 'react';

const SecondaryNav = (props) => {
    console.log(props);
    return (
        <nav className={props.display ? "secondary-nav" : "visually-hidden"}>
            <div className="wrapper secondary-nav-container">
                {/*<!-- Menu -->*/}
                <ul className="secondary-nav-list" role="menu">
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Tuition & Dates</a></li>
                    <li><a href="#">Curriculum</a></li>
                    <li><a className="current" href="#">Typical Day</a></li>
                    <li><a href="#">Instructor</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                {/*<!-- CTA -->*/}
                <ul className="secondary-nav-cta">
                    <li><a href="#" className="btn-primary btn-small">Apply Now</a></li>
                    <li><a href="#" className="btn-secondary btn-small">Syllabus</a></li>
                </ul>
            </div>
        </nav>
    );
};

SecondaryNav.propTypes = {
    display: React.PropTypes.bool.isRequired
};

export default SecondaryNav;