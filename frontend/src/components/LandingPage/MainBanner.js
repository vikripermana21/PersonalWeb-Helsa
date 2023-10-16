import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import '../../styles/styles.css';
import '../LandingPage/styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';


class MainBanner extends Component {
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <>
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span>MODERATE TEAM 1</span>
                                            <h1>Personal Web CV Maker</h1>
                                            <p>Dirancang oleh Moderate 1 Team</p>

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="banner-animation-image">
                                            {/* Shape Image */}
                                            <img 
                                                src="../images/banner-shapes/bn-shape1.png" 
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                        
                                            <img 
                                                src="../images/banner-shapes/bn-shape2.png" 
                                                className="animate__animated animate__fadeInLeft animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                        
                                            <img 
                                                src="../images/banner-shapes/bn-shape3.png" 
                                                className="animate__animated animate__fadeInDown animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="/images/banner-shapes/bn-shape4.png" 
                                                className="animate__animated animate__fadeInDown animate__delay-0.5s" 
                                                alt="image" 
                                            />
                            
                                            <img 
                                                src="../images/banner-shapes/bn-shape5.png" 
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="../images/banner-shapes/bn-shape6.png" 
                                                className="animate__animated animate__rollIn animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="../images/banner-shapes/bn-shape7.png" 
                                                className="animate__animated animate__zoomIn animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="/images/banner-shapes/bn-shape8.png" 
                                                className="animate__animated animate__fadeInLeft animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                
                                            <img 
                                                src="../images/banner-shapes/bn-shape9.png" 
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="../images/banner-shapes/bn-shape10.png" 
                                                className="animate__animated animate__fadeInDown animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                
                                            <img 
                                                src="../images/banner-shapes/bn-shape11.png" 
                                                className="animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                    
                                            <img 
                                                src="../images/banner-shapes/bn-shape12.png" 
                                                className="animate__animated animate__zoomIn animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                           
                                            {/* Main Image */}
                                            <img 
                                                src="../images/banner-img1.png" 
                                                className="main-pic animate__animated animate__fadeInUp animate__delay-0.5s" 
                                                alt="image" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='_ysd-zHamjk'
                    onClose={() => this.setState({ isOpen: false })}
                />
            </>
        );
    }
}

export default MainBanner;
