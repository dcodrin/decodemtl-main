import React from 'react';

import {CTAPrimaryLarge, CTASecondaryLarge} from '../buttons/buttons';

const CourseHero = (props) => {
    return (
        <header className="module module-course hero-course">
            <div className="wrapper">
                <h1 className="module-title">Web Development<span className="module-title-jumbo">Bootcamp</span>
                </h1>
                <p className="text-body-large text-subtle">Fusce vehicula dolor arcu, sit amet blandit dolor
                    mollis nec. Donec arcu, sit amet blandit dolor mollis nec. Donec viverra.</p>
                <p className="text-body-small text-subtle">Next bootcamp starts: July 4th 2016</p>
                <div className="cta-double">
                    <CTAPrimaryLarge text="Apply Now" path="#"/> <CTASecondaryLarge path="#" text="Syllabus"/>
                </div>
            </div>
        </header>
    );
};

export default CourseHero;