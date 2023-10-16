import React, { Component } from 'react';
import '../../styles/styles.css';
import '../LandingPage/styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class WorkProcess extends Component {
    render() {
        return (
            <section className="work-process-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Cara Penggunaan</h2>
                        <p>Berikut cara penggunaan Personal Web CV Maker</p>
                    </div>

                    <div className="work-process">
                        <center>

                        <img src="../images/man-with-mobile.png" alt="logo" width='15px' className='w-6/12' />
                        </center>

                        <div className="work-process-list">
                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="pe-7s-display1"></i>
                                </div>
                                <h3>Register</h3>
                            </div>

                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="pe-7s-display2"></i>
                                </div>
                                <h3>Login</h3>
                            </div>

                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="pe-7s-airplay"></i>
                                </div>
                                <h3>Isi Data Diri</h3>
                            </div>

                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="pe-7s-note2"></i>
                                </div>
                                <h3>Isi Data Lainnya</h3>
                            </div>

                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="pe-7s-light"></i>
                                </div>
                                <h3>Generate CV ke Web</h3>
                            </div>

                            <div className="single-work-process">
                                <div className="icon">
                                    <i className="pe-7s-sun"></i>
                                </div>
                                <h3>Generate CV ke PDF</h3>
                            </div>
                        </div>

                        <img src="../images/circle.png" className="rotateme circle-image" alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkProcess;
