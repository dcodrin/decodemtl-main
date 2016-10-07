//TODO add proper id's to child elements once database is connected, usage of i is NOT recommended for keys

import React from 'react';

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
        const {slide, slideStep, slideStartPosition} = this.state;
        const projects = this.props.projects;
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
                slidePosition: slideStartPosition
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
                slidePosition: -slideStartPosition
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
            if (slideDirection === 'next' && this.state.slidePosition > 0) {
                this._moveSlide(-step, slideStartPos);
            } else if (slideDirection === 'prev' && this.state.slidePosition < 0) {
                this._moveSlide(step, slideStartPos);
            } else {
                clearInterval(this.animate);
                this.animate = null;
            }
        }, 20);
    },
    componentWillMount() {
        //Preload images when component mounts
        this.props.projects.forEach(project => {
            const img = document.createElement('img');
            img.src = project.img; // Assigning the img src immediately requests the image
        });
    },
    componentWillUnmount() {
        clearInterval(this.animate);
        this.animate = null;
    },
    render() {
        const {slidePosition, slideOpacity, slideStartPosition, nextSlide, prevSlide, slide} = this.state;
        //req references a require.context function
        //to access the values array use req.keys()
        //to access a specific path use req(key)
        const {projects} = this.props;
        //const images = req.keys();
        const imageContainer = {
            position: 'relative',
            overflow: 'hidden'
        };
        const currImage = {
            position: 'relative',
            left: slidePosition,
            opacity: slideOpacity
        };

        const imageSlide = {
            position: 'absolute',
            opacity: 1 - slideOpacity >= 0 ? 1 - slideOpacity : 0,
            left: slidePosition > 0 ? slidePosition - slideStartPosition : slidePosition + slideStartPosition
        };

        const getSource = (slidePosition) => {
            if (slidePosition > 0) return projects[prevSlide - 1].img;
            if (slidePosition < 0) return projects[nextSlide - 1].img;
            return projects[slide - 1].img;
        };

        return (
            <section className="module module-course student-project module-boxed-dark">
                <div className="wrapper">
                    <h4>Learn the skills needed to build projects like these!</h4>
                    {/* /student-project-content */}
                    <figure className="student-project-content">
                        <div className="carousel-box">
                            <div
                                style={imageContainer}
                                className="student-project-image visible">
                                {/*NOTE: The image overlay is necessary to avoid flashes in Safari*/}
                                <img style={imageSlide} src={getSource(slidePosition)} alt=""/>
                                <img style={currImage} src={projects[slide - 1].img} alt=""/>
                            </div>
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
