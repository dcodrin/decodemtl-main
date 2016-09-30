import React from 'react';
import {Link} from 'react-router';

const LocationSlider = React.createClass({
    propTypes: {
        req: React.PropTypes.func.isRequired
    },
    getDefaultProps () {
        return {};
    },
    getInitialState() {
        return {
            slide: 1,
            slidePosition: 0,
            slideOpacity: 1,
            slideStartPosition: 500,
            slideStep: 25
        };
    },
    _handleSlide(slideDirection){
        const {slide, slideStep, slideStartPosition} = this.state;
        const images = this.props.req.keys();
        //avoid infinite loop
        if (this.animate) {
            return;
        }
        //reset state
        this.setState({
            slideOpacity: 0,
            slidePosition: 0
        });
        if (slideDirection === 'next') {
            this.setState({
                slidePosition: -slideStartPosition
            });
            //500 % slideStep === 0 must be TRUE
            this._animateSlide(slideStep, slideDirection, -slideStartPosition);
            if (slide % images.length !== 0) {
                this.setState({
                    slide: slide + 1,
                    prevSlide: slide,
                    nextSlide: (slide + 2) > images.length ? 1 : slide + 2
                })
            } else {
                this.setState({
                    slide: 1,
                    prevSlide: slide,
                    nextSlide: 2
                });
            }
        } else if (slideDirection === 'prev') {
            this.setState({
                slidePosition: slideStartPosition
            });
            //500 % step === 0 must be TRUE
            this._animateSlide(slideStep, slideDirection, slideStartPosition);
            if (slide > 1) {
                this.setState({
                    slide: slide - 1,
                    nextSlide: slide,
                    prevSlide: (slide - 2) === 0 ? images.length : slide - 2
                })
            } else {
                this.setState({
                    slide: images.length,
                    nextSlide: 1,
                    prevSlide: images.length - 1
                })
            }
        }
    },
    _moveSlide(step, slideStartPos) {
        this.setState({
            slidePosition: this.state.slidePosition + step,
            slideOpacity: this.state.slideOpacity + (1 / Math.abs((slideStartPos / step)))
        });
    },
    _animateSlide(step, slideDirection, slideStartPos) {
        this.animate = setInterval(() => {
            if (slideDirection === 'next' && this.state.slidePosition < 0) {
                this._moveSlide(step, slideStartPos);
            } else if (slideDirection === 'prev' && this.state.slidePosition > 0) {
                this._moveSlide(-step, slideStartPos);
            } else {
                clearInterval(this.animate);
                this.animate = null;
            }
        }, 20);
    },
    componentWillUnmount() {
        clearInterval(this.animate);
        this.animate = null;
    },
    render() {
        //TODO REMOVE ESLINT EXCEPTION ONCE REFACTORED
        const {slidePosition, slideOpacity, slideStartPosition, nextSlide, prevSlide, slide} = this.state; // eslint-disable-line no-unused-vars
        const req = this.props.req;
        const images = req.keys();

        const imageContainer = {
            position: 'relative',
            overflow: 'hidden'
        };


        const currImage = {
            position: 'relative',
            //left: slidePosition, SLIDE DISABLED
            opacity: slideOpacity
        };

        const imageSlide = {
            position: 'absolute',
            opacity: 1 - slideOpacity >= 0 ? 1 - slideOpacity : 0,
            // left: slidePosition > 0 ? slidePosition - slideStartPosition : slidePosition + slideStartPosition,
            top: 0
        };

        const getSource = (slidePosition) => {
            if (slidePosition < 0) return req(images[prevSlide - 1]);
            if (slidePosition > 0) return req(images[nextSlide - 1]);
            return req(images[slide - 1]);
        };

        return (
            <section className="module module-full-width module-boxed-light working-space-module">
                <div className="wrapper">
                    <h4 className="module-title-medium">Learn at the Best Location in Montreal</h4>
                    <figure className="carousel">
                        <div className="carousel-control carousel-previous">
                            <i className="fa fa-angle-left" aria-hidden="true" title="Previous Image" onClick={this._handleSlide.bind(this, 'prev')}/><span className="sr-only">Previous Project</span>
                        </div>
                        {/* /.carousel-control */}
                        <div className="carousel-box">
                            <div
                                style={imageContainer}
                                className="carousel-img visible">
                                {/*NOTE: The image overlay is necessary to avoid flashes in Safari*/}
                                <img style={imageSlide} src={getSource(slidePosition)} alt=""/>
                                <img style={currImage} src={req(images[slide - 1])} alt=""/>
                            </div>
                        </div>
                        {/* /.carousel-box */}
                        <div className="carousel-control carousel-next">
                            <i className="fa fa-angle-right" aria-hidden="true" title="Next Image" onClick={this._handleSlide.bind(this, 'next')}/><span className="sr-only">Next Project</span>
                        </div>
                        {/* /.carousel-control */}
                    </figure>
                    {/* /.carousel */}
                    <div className="link-more text-body-small">
                        <Link to="/wework">Learn more about the WeWork experience<span className="fa fa-caret-right" aria-hidden="true" /></Link>
                    </div>
                </div>
                {/* /.wrapper */}
            </section>
        );
    }
});

export default LocationSlider;