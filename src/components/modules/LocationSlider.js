import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const LocationSlider = React.createClass({
    propTypes: {
        req: React.PropTypes.func.isRequired
    },
    getInitialState() {
        return {
            slide: 1,
            images: this.props.req.keys()
        };
    },
    _handleSlide(slideDirection){
        const {slide, images} = this.state;
        if (slideDirection === 'next') {
            if (slide % images.length !== 0) {
                this.setState({
                    slide: slide + 1
                })
            } else {
                this.setState({
                    slide: 1
                });
            }
        } else if (slideDirection === 'prev') {
            if (slide > 1) {
                this.setState({
                    slide: slide - 1
                });
            } else {
                this.setState({
                    slide: images.length
                });
            }
        }
    },
    componentWillMount() {
        //Preload images when component mounts
        this.props.req.keys().forEach(src => {
            const img = document.createElement('img');
            img.src = this.props.req(src); // Assigning the img src immediately requests the image
        });
    },
    render() {
        //TODO REMOVE ESLINT EXCEPTION ONCE REFACTORED
        const {slide, images} = this.state; // eslint-disable-line no-unused-vars
        const req = this.props.req;

        const imageContainer = {
            position: 'relative',
            paddingTop: '66%',
            maxWidth: '99%'
        };

        const imageSlide = {
            position: 'absolute',
            top: 0
        };
        return (
            <section className="module module-full-width module-boxed-light working-space-module">
                <div className="wrapper">
                    <h4 className="module-title-medium">Learn at the Best Location in Montreal</h4>
                    <figure className="carousel">
                        <div className="carousel-control carousel-previous"
                             onClick={this._handleSlide.bind(this, 'prev')}>
                            <i className="fa fa-angle-left" aria-hidden="true" title="Previous Image"/>
                            <span className="sr-only">Previous Project</span>
                        </div>
                        {/* /.carousel-control */}
                        <div className="carousel-box">
                            <div
                                style={imageContainer}
                                className="carousel-img visible">
                                {/*//A key needs to be passed in order for the <img> tag to be rerendered*/}
                                <ReactCSSTransitionGroup
                                    transitionName="image"
                                    transitionEnterTimeout={400}
                                    transitionLeaveTimeout={400}
                                    component="div">
                                    <img key={slide} style={imageSlide} src={req(images[slide - 1])} alt=""/>
                                </ReactCSSTransitionGroup>
                            </div>
                        </div>
                        {/* /.carousel-box */}
                        <div className="carousel-control carousel-next" onClick={this._handleSlide.bind(this, 'next')}>
                            <i className="fa fa-angle-right" aria-hidden="true" title="Next Image"/>
                            <span className="sr-only">Next Project</span>
                        </div>
                        {/* /.carousel-control */}
                    </figure>
                    {/* /.carousel */}
                    <div className="link-more text-body-small">
                        <Link to="/wework">Learn more about the WeWork experience
                            <span className="fa fa-caret-right" aria-hidden="true"/>
                        </Link>
                    </div>
                </div>
                {/* /.wrapper */}
            </section>
        );
    }
});


export default LocationSlider;