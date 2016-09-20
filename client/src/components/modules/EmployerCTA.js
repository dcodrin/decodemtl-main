import React from 'react';
import backEndIcon from '../../assets/icons/icon-api.svg';
import frontEndIcon from '../../assets/icons/icon-design.svg';
import toolsIcon from '../../assets/icons/icon-tools.svg';
const EmployerCTA = (props) => {
    return (
        <section className="module employer-cta-module">
            <div className="wrapper">
                <div className="module-boxed">
                    <p>Graduates from our full-stack curriculum are ready for careers as web developers.</p>

                    <div className="skills-container module-boxed-medium">
                        <div className="skill">
                            <div className="skill-title">
                                <span className="icon" aria-hidden="true"><img src={backEndIcon} alt="backend icon" /></span>
                                <h4>Front&#8209;end</h4>
                            </div>
                            <p>HTML5, CSS3, JavaScript, jQuery, React</p>
                        </div>
                        {/* /.skill */}
                        <div className="skill">
                            <div className="skill-title">
                                <span className="icon" aria-hidden="true"><img src={frontEndIcon} alt="frontend icon" /></span>
                                <h4>Back&#8209;end</h4>
                            </div>
                            <p>MYSQL, Node.js, Express.js, REST API’s</p>
                        </div>
                        {/* /.skill */}
                        <div className="skill">
                            <div className="skill-title">
                                <span className="icon" aria-hidden="true"><img src={toolsIcon} alt="tooling icon" /></span>
                                <h4>Tooling</h4>
                            </div>
                            <p>Git & Github, Terminal, Webpack</p>
                        </div>
                        {/* /.skill */}
                    </div>
                    {/* /.skills-container */}

                    <p className="text-body-large">Join our growing network of hiring partners!</p>
                    <p>Reach out and let us introduce you to top technical talent from our pool of graduates…</p>
                    <a
                        className="btn-primary btn-large"
                        itemProp="email"
                        href="mailto:hello@decodemtl.com?subject=Tell me more about your students!&body=Hello DecodeMTL! Please let me know more about your awesome students!"
                    >Get introduced to talent</a>
                    <p className="text-body-large">or call us toll free : <a className="phone-link" itemProp="telephone" href="tel:1-888-511-9155">1-888-511-9155</a></p>
                </div>
                {/* /.module-boxed */}
            </div>
            {/* /.wrapper */}
        </section>
    );
};

EmployerCTA.propTypes = {};

export default EmployerCTA;