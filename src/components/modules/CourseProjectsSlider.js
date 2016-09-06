import React from 'react';
import shortid from 'shortid';

import coolProject from '../../assets/images/project.png';
import cat1 from '../../assets/images/cat1.jpg';
import cat2 from '../../assets/images/cat2.jpg';
import cat3 from '../../assets/images/cat3.jpg';

// dynamic images from projects
const projectImages = {
    coolProject,
    cat1,
    cat2,
    cat3
};


const CourseProjectsSlider = React.createClass({
    propTypes: {
        projects: React.PropTypes.array.isRequired
    },
    getInitialState(){
        return {
            slide: 1,
            slidePosition: 0,
            slideOpacity: 1,
            slideStartPosition: 500,
            slideStep: 25
        };
    },
    _handleSlide(slideDirection){
        const {slide, slideStep, slideStartPosition, slidePosition} = this.state;
        const projects = this.props.projects;

        //avoid infinite loop
        if (slidePosition !== 0) {
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
            //500 % step === 0 must be TRUE
            this._animateSlide(slideStep, slideDirection, -slideStartPosition);
            if (slide % projects.length !== 0) {
                this.setState({
                    slide: slide + 1,
                    prevSlide: slide,
                    nextSlide: (slide + 2) > projects.length ? 1 : slide + 2
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
                    prevSlide: (slide - 2) === 0 ? projects.length : slide - 2
                })
            } else {
                this.setState({
                    slide: projects.length,
                    nextSlide: 1,
                    prevSlide: projects.length - 1
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
                this._moveSlide(-step, slideStartPos)
            } else {
                this.setState({
                    slidePosition: 0,
                    slideOpacity: 1
                });
                clearInterval(this.animate);
            }
        }, 20);
    },
    componentWillUnmount() {
        clearInterval(this.animate);
    },
    render() {
        const {slidePosition, slideOpacity, slideStartPosition, nextSlide, prevSlide, slide} = this.state;
        const {projects} = this.props;
        const imageContainer = {
            position: 'relative',
            overflow: 'hidden'
        };
        const currImage = {
            position: 'relative',
            left: slidePosition,
            opacity: slideOpacity,
            display: 'inline'
        };

        const imageSlide = {
            position: 'absolute',
            opacity: 1 - slideOpacity,
            left: slidePosition > 0 ? slidePosition - slideStartPosition : slidePosition + slideStartPosition
        };

        return (
            <section className="module module-course student-project module-boxed-dark">
                <div className="wrapper">
                    <h4>Gain the skills to build projects like these!</h4>
                    {/* /student-project-content */}
                    <figure className="student-project-content">
                        <div className="carousel-box">
                            {projects.map((item, i) => {
                                return (
                                    <div
                                        style={imageContainer}
                                        key={shortid.generate()}
                                        className={slide === i + 1 ? "student-project-image visible" : "student-project-image"}>
                                        {slidePosition > 0 ? <img style={imageSlide} src={projectImages[projects[nextSlide - 1].image]} alt=""/> : ''}
                                        <img style={currImage} src={projectImages[item.image]} alt=""/>
                                        {slidePosition < 0 ? <img style={imageSlide} src={projectImages[projects[prevSlide - 1].image]} alt=""/> : ''}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="student-project-details">
                            <div className="slider-controls buttons">
                                <a className="slider-previous prev" onClick={this._handleSlide.bind(this, 'prev')}>
                                    <i className="fa fa-chevron-circle-left" aria-hidden="true"
                                       title="Previous Project"/><span className="sr-only">Previous Project</span>
                                </a>
                                <div className="slider-current">{slide}</div>
                                <a className="slider-next next" onClick={this._handleSlide.bind(this, 'next')}><i
                                    className="fa fa-chevron-circle-right" aria-hidden="true"
                                    title="Next Project"/><span className="sr-only">Next Project</span></a>
                            </div>
                            {/*slider-controls*/}
                            <figcaption className="student-project-caption">
                                <p className="project-title">{projects[slide - 1].title}</p>
                                <p className="text-body-small">{projects[slide - 1].description}</p>
                            </figcaption>
                            {/*student-project-caption*/}
                        </div>
                    </figure>
                </div>
                {/* /.wrapper */}
            </section>
        );
    }
});


export default CourseProjectsSlider;
