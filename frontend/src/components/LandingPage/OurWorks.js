import React, { Component } from 'react';
import '../../styles/styles.css';
import '../LandingPage/styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class OurWorks extends Component {
    render() {
        return (
            <>
                <section className="case-studies-area ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Works</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg1">
                                    <div className="content">
                                        <span>
                                            <a href="/portfolio-details">Web Design</a>
                                        </span>

                                        <h3>
                                            <a href="/portfolio-details">Designing a better cinema experience</a>
                                        </h3>
                                    </div>

                                    <a href="/portfolio-details" className="btn btn-primary">View Case Study</a>

                                    <div className="shape">
                                        <img src="../images/case-studies/studie-shape1.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg2">
                                    <div className="content">
                                        <span>
                                            <a href="/portfolio-details">Development</a>
                                        </span>

                                        <h3>
                                            <a href="/portfolio-details">Building design process within teams</a>
                                        </h3>
                                    </div>

                                    <a href="/portfolio-details" className="btn btn-primary">View Case Study</a>

                                    <div className="shape">
                                        <img src="../images/case-studies/studie-shape2.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg3">
                                    <div className="content">
                                        <span>
                                            <a href="/portfolio-details">Web Development</a>
                                        </span>

                                        <h3>
                                            <a href="/portfolio-details">How intercom brings play into their design process</a>
                                        </h3>
                                    </div>

                                    <a href="/portfolio-details" className="btn btn-primary">View Case Study</a>

                                    <div className="shape">
                                        <img src="../images/case-studies/studie-shape3.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg4">
                                    <div className="content">
                                        <span>
                                            <a href="/portfolio-details">React Development</a>
                                        </span>

                                        <h3>
                                            <a href="/portfolio-details">Stuck with to-do list, I created a new app for myself</a>
                                        </h3>
                                    </div>

                                    <a href="/portfolio-details" className="btn btn-primary">View Case Study</a>

                                    <div className="shape">
                                        <img src="../images/case-studies/studie-shape4.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg5">
                                    <div className="content">
                                        <span>
                                            <a href="/portfolio-details">Angular Development</a>
                                        </span>

                                        <h3>
                                            <a href="/portfolio-details">Examples of different types of sprints</a>
                                        </h3>
                                    </div>

                                    <a href="/portfolio-details" className="btn btn-primary">View Case Study</a>

                                    <div className="shape">
                                        <img src="../images/case-studies/studie-shape5.png" alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-case-studies bg6">
                                    <div className="content">
                                        <span>
                                            <a href="/portfolio-details">App Development</a>
                                        </span>

                                        <h3>
                                            <a href="/portfolio-details">Redesigning the New York times app</a>
                                        </h3>
                                    </div>

                                    <a href="/portfolio-details" className="btn btn-primary">View Case Study</a>

                                    <div className="shape">
                                        <img src="../images/case-studies/studie-shape6.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="view-more-work">
                            <a href="/portfolio" className="btn btn-primary">View More Work</a>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurWorks;
