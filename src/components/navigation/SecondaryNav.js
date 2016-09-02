import React from 'react';

import {Link} from 'react-router';

const SecondaryNav = (props) => {
    return (
        <nav className={props.display ? "secondary-nav fade-in" : "secondary-nav fade-out hidden"}>
            <div className="wrapper secondary-nav-container">
                {/*<!-- Menu -->*/}
                <ul className="secondary-nav-list" role="menu">
                    <li><Link to="#">Overview</Link></li>
                    <li><Link to="#">Tuition & Dates</Link></li>
                    <li><Link to="#">Curriculum</Link></li>
                    <li><Link className="current" to="#">Typical Day</Link></li>
                    <li><Link to="#">Instructor</Link></li>
                    <li><Link to="#">Careers</Link></li>
                    <li><Link to="#">FAQ</Link></li>
                </ul>
                {/*<!-- CTA -->*/}
                <ul className="secondary-nav-cta">
                    <li><Link to="#" className="btn-primary btn-small">Apply Now</Link></li>
                    <li><Link to="#" className="btn-secondary btn-small">Syllabus</Link></li>
                </ul>
            </div>
        </nav>
    );
};

SecondaryNav.propTypes = {
    display: React.PropTypes.bool.isRequired
};

export default SecondaryNav;