import React from 'react';

//req.keys() is an array with all the relative paths of the images
// req.keys().map(key => req(key)) --> require("../../assets/images/partner-logos/" + key);
const req = require.context("../../assets/images/partner-logos", true, /^.*\.png$/i);
import {Link} from 'react-router';

const PartnersLogos = (props) => {
    return (
        <section className="module partner-logos-module module-boxed-medium">
            <div className="wrapper">
                <h4>Our grads work with these fine folks</h4>
                <div className="partner-logos-container">
                    {
                        req.keys().map((img, i) => (
                            <div key={i} className="partner-logo">
                                <img src={req(img)} alt=""/>
                            </div>
                        ))
                    }
                </div>
                {/*<!-- /.partner-logo-container -->*/}
                <div className="link-more text-body-small">
                    <Link to="#">This is a block link<span className="fa fa-caret-right" aria-hidden="true" /></Link>
                </div>
            </div>
            {/* <!-- /.wrapper -->*/}
        </section>
    );
};

PartnersLogos.propTypes = {};

export default PartnersLogos;