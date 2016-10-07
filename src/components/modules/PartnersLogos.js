import React from 'react';

//req.keys() is an array with all the relative paths of the images
// req.keys().map(key => req(key)) --> require("../../assets/images/partner-logos/" + key);
const req = require.context("../../assets/images/partner-logos", true, /^.*\.png$/i);

const PartnersLogos = (props) => {
    let employerLink = '/employers';
    if (window.location.pathname === '/employers') {
        employerLink = 'mailto:hello@decodemtl.com?subject=Tell me more about your students!&body=Hello Decode! Please let me know more about your awesome students!'
    }
    return (
        <section className="module partner-logos-module module-boxed-medium">
            <div className="wrapper">
                <h4>Our grads work with these fine folks</h4>
                <div className="partner-logos-container">
                    {req.keys().map((img, i) => (
                        <div key={i} className="partner-logo">
                            <img src={req(img)} alt=""/>
                        </div>
                    ))}
                </div>
                {/*<!-- /.partner-logo-container -->*/}
                <div className="link-more text-body-small">
                    <a href={employerLink}>Join
                        our growing network of hiring partners
                        <span className="fa fa-caret-right" aria-hidden="true"/>
                    </a>
                </div>
            </div>
            {/* <!-- /.wrapper -->*/}
        </section>
    );
};

PartnersLogos.propTypes = {};

export default PartnersLogos;