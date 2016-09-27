import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ConfirmModal from '../modules/ConfirmModal';
import {subscribe} from '../../api/api';


const MainFooter = React.createClass({
    propTypes: {},
    getInitialState() {
        return {
            modal: false
        }
    },
    _handleSubmit(e) {
        e.preventDefault();
        const email = this._footerEmail.value.trim().toLowerCase();
        subscribe(email)
            .then(() => {
                this._footerEmail.value = '';
                this.setState({
                    modal: true,
                    status: true
                })
            })
            .catch(() => {
                this._footerEmail.value = '';
                this.setState({
                    modal: true,
                    status: false
                })
            })
    },
    _toggleModal() {
        this.setState({
            modal: false
        })
    },
    render() {
        return (
            <footer className="site-footer module-boxed-dark">
                <ReactCSSTransitionGroup
                    transitionName="video"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.modal
                        ? <ConfirmModal
                        status={this.state.status}
                        modalType='subscribe'
                        toggleModal={this._toggleModal}/>
                        : null}
                </ReactCSSTransitionGroup>
                <div className="wrapper">

                    {/* footer-logo */}
                    <Link to="/">
                        <svg className="decode-logo reversed" id="decode-logo" xmlns="http://www.w3.org/2000/svg"
                             width="426" height="64" viewBox="0 0 426 64">
                        <g className="mtl" id="mtl">
                            <path id="L"
                                  d="M397.345 11.79c0-.42.21-.63.63-.63h6.174c.42 0 .63.21.63.63v35.153c0 .252.125.38.377.38h19.656c.42 0 .63.21.63.63v5.417c0 .42-.21.63-.63.63h-26.838c-.42 0-.63-.21-.63-.63V11.79z"/>
                            <path id="T"
                                  d="M372.207 54c-.42 0-.63-.21-.63-.63V18.216c0-.252-.126-.378-.378-.378h-11.215c-.42 0-.63-.21-.63-.63V11.79c0-.42.21-.63.63-.63h30.618c.42 0 .63.21.63.63v5.418c0 .42-.21.63-.63.63H379.39c-.252 0-.378.126-.378.378V53.37c0 .42-.21.63-.63.63h-6.175z"/>
                            <path id="M"
                                  d="M315.066 11.79c0-.42.21-.63.63-.63h5.607c.546 0 .903.21 1.07.63l11.78 26.397h.254L346 11.79c.168-.42.524-.63 1.07-.63h5.544c.42 0 .63.21.63.63v41.58c0 .42-.21.63-.63.63h-5.48c-.42 0-.63-.21-.63-.63V27.162h-.252l-9.072 20.16c-.252.546-.65.818-1.197.818h-3.654c-.546 0-.946-.272-1.198-.818l-9.072-20.16h-.252V53.37c0 .42-.21.63-.63.63h-5.482c-.42 0-.63-.21-.63-.63V11.79z"/>
                        </g>
                        <g className="decode" id="decode">
                            <path id="E"
                                  d="M279.156 11.79c0-.42.21-.63.63-.63h26.84c.42 0 .628.21.628.63v5.418c0 .42-.21.63-.63.63H286.97c-.253 0-.38.126-.38.378v10.458c0 .252.127.378.38.378h16.567c.42 0 .63.21.63.63V35.1c0 .42-.21.63-.63.63H286.97c-.253 0-.38.126-.38.378v10.836c0 .252.127.38.38.38h19.655c.42 0 .63.21.63.63v5.417c0 .42-.21.63-.63.63h-26.838c-.42 0-.63-.21-.63-.63V11.79z"/>
                            <path id="D"
                                  d="M239.78 11.79c0-.42.212-.63.632-.63h15.31c7.475 0 12.24 3.17 14.3 9.513.168.546.314 1.124.44 1.732.126.61.242 1.354.347 2.237.104.882.178 1.963.22 3.245.042 1.28.062 2.845.062 4.693 0 1.848-.02 3.412-.062 4.693s-.115 2.362-.22 3.244c-.105.883-.222 1.628-.347 2.236-.127.61-.273 1.188-.44 1.732C267.962 50.83 263.195 54 255.72 54h-15.308c-.42 0-.63-.21-.63-.63V11.79zm7.435 35.153c0 .252.127.38.38.38h6.362c2.394 0 4.314-.42 5.764-1.26s2.49-2.228 3.12-4.16c.125-.294.23-.66.314-1.102.084-.44.158-1.008.22-1.7.063-.693.116-1.564.16-2.614.04-1.05.06-2.353.06-3.906 0-1.554-.02-2.856-.06-3.906-.044-1.05-.097-1.932-.16-2.646-.06-.714-.136-1.28-.22-1.7s-.19-.778-.314-1.072c-.63-1.932-1.67-3.318-3.12-4.158-1.448-.84-3.37-1.26-5.763-1.26h-6.363c-.252 0-.38.126-.38.378v28.727z"/>
                            <path id="O"
                                  d="M215.274 54.693c-3.696 0-6.867-.872-9.513-2.615-2.645-1.742-4.514-4.314-5.606-7.717-.21-.67-.388-1.343-.535-2.016-.148-.672-.264-1.448-.348-2.33-.084-.883-.147-1.922-.19-3.12s-.062-2.635-.062-4.314c0-1.68.02-3.12.063-4.315.042-1.197.105-2.237.19-3.12s.2-1.658.346-2.33.324-1.344.534-2.016c1.092-3.403 2.96-5.975 5.607-7.718 2.647-1.743 5.818-2.615 9.514-2.615 3.738 0 6.93.872 9.576 2.615s4.515 4.315 5.606 7.717c.21.67.39 1.343.536 2.015s.263 1.45.347 2.33.145 1.922.187 3.12c.042 1.197.063 2.635.063 4.315 0 1.68-.02 3.118-.063 4.315s-.104 2.236-.188 3.118c-.085.883-.2 1.66-.348 2.33-.147.674-.325 1.346-.536 2.018-1.092 3.403-2.96 5.976-5.606 7.718-2.645 1.743-5.837 2.615-9.576 2.615zm0-6.677c2.142 0 3.864-.494 5.166-1.48 1.302-.988 2.247-2.363 2.835-4.127.126-.38.23-.82.314-1.324s.157-1.134.22-1.89.116-1.67.158-2.74c.042-1.072.062-2.363.062-3.875 0-1.51-.02-2.803-.062-3.874s-.095-1.984-.158-2.74c-.062-.757-.137-1.387-.22-1.89-.085-.505-.19-.946-.315-1.324-.588-1.764-1.533-3.14-2.835-4.126s-3.024-1.48-5.166-1.48c-2.142 0-3.854.494-5.134 1.48-1.28.987-2.216 2.362-2.804 4.126-.126.378-.24.82-.346 1.323-.105.504-.19 1.134-.252 1.89-.063.756-.105 1.67-.126 2.74s-.03 2.363-.03 3.876.01 2.804.03 3.876c.02 1.07.063 1.984.126 2.74s.147 1.386.252 1.89c.105.504.22.945.346 1.323.588 1.763 1.522 3.138 2.804 4.126 1.28.985 2.992 1.48 5.134 1.48z"/>
                            <path id="C"
                                  d="M163.93 44.172c-.21-.672-.39-1.334-.536-1.984s-.263-1.407-.347-2.268c-.084-.86-.147-1.87-.19-3.024s-.062-2.594-.062-4.315c0-1.68.02-3.107.063-4.283.042-1.176.105-2.194.19-3.056.083-.86.2-1.616.346-2.267.147-.65.326-1.312.536-1.985 1.092-3.528 2.93-6.163 5.512-7.906s5.702-2.615 9.355-2.615c3.444 0 6.416.82 8.915 2.457 2.5 1.638 4.357 3.885 5.576 6.74.126.38.02.63-.315.757l-5.355 2.584c-.378.21-.65.105-.82-.315-.713-1.513-1.69-2.815-2.928-3.907-1.24-1.092-2.93-1.638-5.072-1.638-2.058 0-3.707.504-4.945 1.512-1.24 1.008-2.152 2.394-2.74 4.158-.127.462-.242.924-.347 1.386s-.19 1.062-.252 1.796-.105 1.627-.126 2.677c-.02 1.05-.032 2.352-.032 3.906 0 1.595.01 2.907.032 3.937s.063 1.91.126 2.646c.063.734.147 1.344.252 1.826.105.482.22.934.346 1.353.588 1.765 1.5 3.15 2.74 4.158 1.24 1.01 2.888 1.514 4.946 1.514 2.142 0 3.833-.547 5.072-1.64 1.24-1.09 2.215-2.394 2.93-3.905.167-.42.44-.526.818-.315l5.355 2.583c.336.126.44.378.315.756-1.218 2.856-3.077 5.103-5.576 6.74-2.5 1.64-5.47 2.458-8.915 2.458-3.654 0-6.772-.872-9.355-2.615-2.583-1.74-4.42-4.377-5.512-7.905z"/>
                            <path id="E_1_"
                                  d="M128.146 11.79c0-.42.21-.63.63-.63h26.838c.42 0 .63.21.63.63v5.418c0 .42-.21.63-.63.63h-19.656c-.252 0-.378.126-.378.378v10.458c0 .252.126.378.378.378h16.57c.42 0 .63.21.63.63V35.1c0 .42-.21.63-.63.63h-16.57c-.252 0-.378.126-.378.378v10.836c0 .252.126.38.378.38h19.656c.42 0 .63.21.63.63v5.417c0 .42-.21.63-.63.63h-26.84c-.42 0-.63-.21-.63-.63V11.79z"/>
                            <path id="D_1_"
                                  d="M88.77 11.79c0-.42.21-.63.63-.63h15.31c7.476 0 12.243 3.17 14.3 9.513.17.546.316 1.124.442 1.732.126.61.24 1.354.346 2.237.105.882.18 1.963.22 3.245.043 1.28.064 2.845.064 4.693 0 1.848-.02 3.412-.063 4.693s-.117 2.362-.222 3.244c-.105.883-.22 1.628-.346 2.236-.126.61-.273 1.188-.44 1.732C116.95 50.83 112.185 54 104.708 54H89.4c-.42 0-.63-.21-.63-.63V11.79zm7.435 35.153c0 .252.126.38.378.38h6.363c2.394 0 4.315-.42 5.765-1.26s2.49-2.228 3.12-4.16c.126-.294.23-.66.315-1.102.084-.44.157-1.008.22-1.7.063-.693.116-1.564.158-2.614.042-1.05.063-2.353.063-3.906 0-1.554-.02-2.856-.063-3.906-.042-1.05-.095-1.932-.158-2.646s-.136-1.28-.22-1.7-.19-.778-.315-1.072c-.63-1.932-1.67-3.318-3.12-4.158-1.448-.84-3.37-1.26-5.764-1.26h-6.363c-.252 0-.378.126-.378.378v28.727z"/>
                        </g>
                        <g className="petals" id="petals">
                            <path className="petal-generic petal-left" id="petal-left"
                                  d="M11.215 15.93c2.158 1.796 15.505 15.92 15.505 15.92S15.257 43.6 12.458 46.64C6.16 53.47-3.936 45.383 1.602 37.72c1.685-2.333 5.66-3.883 9.385-1.488 2.887 1.854 5.466.593 6.974-.87 1.416-1.37 2.365-4.238.043-6.945-1.456-1.696-4.476-2.52-7.048-.844-3.068 2-6.842 1.125-8.628-.695-6.216-6.33 1.54-15.66 8.888-10.948"/>
                            <path className="petal-generic petal-bottom" id="petal-bottom"
                                  d="M15.46 52.203c1.782-2.172 15.81-15.61 15.81-15.61s11.67 11.54 14.686 14.358c6.787 6.343-1.246 16.51-8.857 10.933-2.317-1.696-3.855-5.697-1.48-9.45 1.843-2.905.59-5.503-.862-7.02-1.36-1.426-4.21-2.38-6.898-.043-1.685 1.466-2.503 4.507-.838 7.097 1.985 3.09 1.117 6.89-.69 8.688-6.287 6.257-15.553-1.552-10.873-8.952"/>
                            <path className="petal-special petal-right" id="petal-right"
                                  d="M51.483 15.93c7.348-4.712 15.104 4.62 8.89 10.948-1.787 1.82-5.56 2.694-8.63.695-2.572-1.676-5.59-.852-7.048.844-2.322 2.707-1.372 5.575.042 6.946 1.51 1.462 4.088 2.724 6.974.87 3.727-2.396 7.7-.846 9.385 1.487 5.538 7.663-4.558 15.75-10.856 8.918C47.44 43.6 35.977 31.85 35.977 31.85s13.35-14.124 15.505-15.92"/>
                            <path className="petal-generic petal-top" id="petal-top"
                                  d="M15.46 11.657C10.78 4.26 20.044-3.55 26.33 2.707c1.807 1.798 2.675 5.6.69 8.688-1.665 2.59-.846 5.63.838 7.096 2.688 2.34 5.537 1.384 6.898-.04 1.452-1.52 2.705-4.117.863-7.022-2.376-3.752-.837-7.753 1.48-9.45 7.61-5.576 15.643 4.59 8.856 10.93C42.94 15.73 31.27 27.27 31.27 27.27S17.243 13.83 15.46 11.66"/>
                        </g>
                        </svg>
                    </Link>
                    {/* /.footer-logo */}

                    {/* footer-content */}
                    <div className="footer-content">
                        <section className="footer-contact">

                            {/* footer-optin */}
                            <h4>Join our growing community</h4>
                            <p>Enter your email to receive info about new courses, workshops and events.</p>
                            <form className="optin-form optin-footer" onSubmit={this._handleSubmit}>
                                <label htmlFor="email" className="visually-hidden">Email</label>
                                <input ref={email => {this._footerEmail = email}} type="email" name="email" placeholder="Your email"/>
                                <input type="submit" name="submit" value="Join"/>
                                <div className="foot-note text-body-small text-subtle">
                                    By providing us with your email, you agree to the terms of our <Link to='/privacy'>Privacy
                                    Policy</Link> and <Link to="/terms">Terms of Service</Link>.
                                </div>
                            </form>
                            {/* /.footer-optin */}

                            {/* footer-contact-details */}
                            <ul className="footer-contact-details contact-details-list" itemScope
                                itemType="http://schema.org/ContactPoint">
                                <li>
                                    <h4>Contact Us</h4>
                                </li>
                                <li itemScope itemType="schema.org/PostalAddress">
                                    <a href="https://goo.gl/maps/RmSE1PKEiXH2">
                                        <span className="fa fa-map-marker fa-fw" aria-hidden="true"/>
                                        <span itemProp="streetAddress">4-3 Place Ville Marie, </span>
                                        <span itemProp="addressLocality">Montréal, </span>
                                        <span itemProp="addressRegion">Québec </span>
                                        <span itemProp="postalCode">H3B 2E3</span>
                                    </a>
                                </li>
                                <li>
                                    <a itemProp="telephone" href="tel:1-888-511-9155"><span
                                        className="fa fa-phone fa-fw" aria-hidden="true"/> 1-888-511-9155</a>
                                </li>
                                <li>
                                    <a itemProp="email" href="mailto:hello@decodemtl.com"><span
                                        className="fa fa-envelope fa-fw" aria-hidden="true"/> hello@decodemtl.com</a>
                                </li>
                            </ul>
                            {/* /.footer-contact-details */}

                            {/* social-list */}
                            <ul className="social-list">
                                <li className="social-list-item">
                                    <a href="https://www.facebook.com/decodemtl">
                                        <span className="social-icon fa fa-facebook-square" aria-hidden="true"/>
                                        <span className="visually-hidden">Facebook</span>
                                    </a>
                                </li>
                                <li className="social-list-item">
                                    <a href="https://twitter.com/decodemtl">
                                        <span className="social-icon fa fa-twitter-square" aria-hidden="true"/>
                                        <span className="visually-hidden">Twitter</span>
                                    </a>
                                </li>
                                <li className="social-list-item">
                                    <a href="https://www.instagram.com/decodemtl">
                                        <span className="social-icon fa fa-instagram" aria-hidden="true"/>
                                        <span className="visually-hidden">Instragram</span>
                                    </a>
                                </li>
                                <li className="social-list-item">
                                    <a href="https://github.com/DecodeMTL">
                                        <span className="social-icon fa fa-github-square" aria-hidden="true"/>
                                        <span className="visually-hidden">Github</span>
                                    </a>
                                </li>
                            </ul>
                            {/* /.social-list */}
                        </section>
                        {/* .footer-contact */}

                        {/* footer-nav */}
                        <nav className="footer-nav" role="navigation">
                            <div className="footer-nav-container">
                                <h4>Courses</h4>
                                <ul className="course-list" role="menu">
                                    <li className="course-list-item"><Link to="/courses/web-development-immersive">Web Development</Link></li>
                                    <li className="course-list-item"><Link to="/courses/html-css">HTML & CSS</Link></li>
                                    <li className="course-list-item"><Link to="/courses/javascript">JavaScript</Link></li>
                                    <li className="course-list-item"><Link to="/faq">FAQ</Link></li>
                                    <li className="course-list-item"><Link to="/apply">Apply</Link></li>
                                </ul>
                            </div>
                            <div className="footer-nav-container">
                                <h4>DecodeMTL</h4>
                                <ul className="about-list" role="menu">
                                    <li className="about-list-item"><Link to="/about">About</Link></li>
                                    <li className="about-list-item"><Link to="/contact">Contact</Link></li>
                                    <li className="about-list-item"><Link to="/employers">Employers</Link></li>
                                    {/*<li className="about-list-item"><Link to="#">Alumni</Link></li>*/}
                                    <li className="about-list-item"><Link to="/events">Events</Link></li>
                                    <li className="about-list-item"><Link to="/wework">WeWork</Link></li>
                                    <li className="about-list-item"><Link to="/housing">Student Housing</Link></li>
                                </ul>
                            </div>
                        </nav>
                        {/* /.footer-nav */}
                    </div>
                    {/* /.footer-content */}
                </div>
                {/* /.wrapper */}
            </footer>
        );
    }
});

export default MainFooter;