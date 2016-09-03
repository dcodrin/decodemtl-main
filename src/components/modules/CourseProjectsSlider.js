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
            projects: this.props.projects
        };
    },
    _handleSlide(slideDirection){
        const {slide, projects} = this.state;
        if (slideDirection === 'next') {
            if (slide % projects.length !== 0) {
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
                })
            } else {
                this.setState({
                    slide: projects.length
                })
            }
        }

    },
    render() {
        return (
            <section className="module module-course student-project module-boxed-dark">
                <div className="wrapper">
                    <h4>Gain the skills to build projects like these!</h4>
                    {/* /student-project-content */}
                    <figure className="student-project-content">
                        <div className="carousel-box">
                            {this.state.projects.map((item, i) => {
                                return <div key={shortid.generate()} className={this.state.slide === i + 1 ? "student-project-image visible" : "student-project-image"}><img
                                    src={projectImages[item.image]} alt=""/></div>
                            })}
                        </div>
                        <div className="student-project-details">
                            <div className="slider-controls buttons">
                                <a className="slider-previous prev" onClick={this._handleSlide.bind(this, 'prev')}>
                                    <i className="fa fa-chevron-circle-left" aria-hidden="true"
                                       title="Previous Project"/><span className="sr-only">Previous Project</span>
                                </a>
                                <div className="slider-current">{this.state.slide}</div>
                                <a className="slider-next next" onClick={this._handleSlide.bind(this, 'next')}><i
                                    className="fa fa-chevron-circle-right" aria-hidden="true"
                                    title="Next Project"/><span className="sr-only">Next Project</span></a>
                            </div>
                            {/*slider-controls*/}
                            <figcaption className="student-project-caption">
                                <p className="project-title">{this.props.projects[this.state.slide - 1].title}</p>
                                <p className="text-body-small">{this.props.projects[this.state.slide - 1].description}</p>
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
