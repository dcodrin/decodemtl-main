import React from 'react';

import {Link} from 'react-scroll';


const SecondaryNav = (props) => {
    return (
        <nav className={props.display ? "secondary-nav fade-in" : "secondary-nav fade-out hidden"}>
            <div className="wrapper secondary-nav-container">
                {/*<!-- Menu -->*/}
                <ul className="secondary-nav-list" role="menu">
                    {props.links.map((link, i) => (
                        <li key={i}>
                            <Link
                                activeClass="current"
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                >
                                {link.name}
                            </Link>
                        </li>
                    ))}
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
    display: React.PropTypes.bool.isRequired,
    links: React.PropTypes.array.isRequired
};

export default SecondaryNav;