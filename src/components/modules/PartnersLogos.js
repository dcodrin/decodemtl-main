//TODO Needs refactoring. To be decided based on data.
import React from 'react';

import appDirect from '../../assets/images/partner-logos/partner-logo-appdirect.png';
import autoDesk from '../../assets/images/partner-logos/partner-logo-autodesk.png';
import decidata from '../../assets/images/partner-logos/partner-logo-decidata.png';
import mg2media from '../../assets/images/partner-logos/partner-logo-mg2media.png';
import turbulent from '../../assets/images/partner-logos/partner-logo-turbulent.png';
import sidlee from '../../assets/images/partner-logos/partner-logo-sidlee.png';
import plogg from '../../assets/images/partner-logos/partner-logo-plogg.png';
import salesFloor from '../../assets/images/partner-logos/partner-logo-salesfloor.png';
import narcity from '../../assets/images/partner-logos/partner-logo-narcity-media.png';
import signatureWeb from '../../assets/images/partner-logos/partner-logo-signatureweb.png';
import askPam from '../../assets/images/partner-logos/partner-logo-askpam.png';
import sweetIq from '../../assets/images/partner-logos/partner-logo-sweetiq.png';

import {Link} from 'react-router';

const PartnersLogos = (props) => {
    return (
        <section className="module partner-logos-module module-boxed-medium">
            <div className="wrapper">
                <h4>Our grads work with these fine folks</h4>
                <div className="partner-logos-container">
                    <div className="partner-logo">
                        <img src={plogg} alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={autoDesk}  alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={decidata}  alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={mg2media}  alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={turbulent}  alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={sidlee} alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={appDirect}  alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={salesFloor} alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={narcity}  alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={signatureWeb}  alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={askPam}  alt=""/>
                    </div>
                    <div className="partner-logo">
                        <img src={sweetIq}  alt=""/>
                    </div>
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