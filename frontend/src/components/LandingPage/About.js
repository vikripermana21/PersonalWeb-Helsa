import React, { Component } from 'react';
import '../../styles/styles.css';
import '../LandingPage/styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/icofont.min.css';
import '../../styles/pe-icon-7-stroke.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class Services extends Component {
    render() {
        return (
            <div className="bg-fcfbfb ptb-100 pb-60">
                <div className="container">
                    <div className="section-title">
                        <h2>About Website</h2>
                        <p>Personal Web CV Maker adalah platform inovatif yang dirancang khusus untuk membantu individu dalam proses pembuatan Curriculum Vitae (CV) 
                            atau resume pribadi mereka. Dengan Personal Web CV Maker, Anda dapat dengan mudah dan cepat membuat CV yang menonjol dan profesional yang 
                            akan membantu Anda mencapai tujuan karir Anda.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-comment bg-13c4a1"></i>
                                <h3>
                                    <a href="/">Pembuatan CV yang Mudah</a>
                                </h3>
                                <p>Platform ini menawarkan alat pembuatan CV yang intuitif dan mudah digunakan, sehingga Anda dapat membuat CV profesional tanpa kesulitan.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-display2 bg-6610f2"></i>
                                <h3>
                                    <a href="/service-details">Isi Konten yang Disesuaikan</a>
                                </h3>
                                <p>Anda dapat mengisi konten CV Anda dengan pengalaman, pendidikan, keterampilan, dan informasi pribadi. Semua elemen dapat disesuaikan sesuai kebutuhan Anda.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-light bg-ffb700"></i>
                                <h3>
                                    <a href="/service-details">Desain CV</a>
                                </h3>
                                <p>Desain CV dapat disesuaikan dengan kebutuhan Anda. Dengan 2 pilihan CV desain, "ATS", dan "Creative".</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-phone bg-fc3549"></i>
                                <h3>
                                    <a href="/service-details">Generate ke Website</a>
                                </h3>
                                <p>Fitur ini memungkinkan Anda untuk mengkonversi CV pribadi Anda menjadi sebuah situs web pribadi yang menampilkan informasi Anda dengan cara yang menarik dan mudah diakses. </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-lock bg-00d280"></i>
                                <h3>
                                    <a href="/service-details">Privasi dan Keamanan</a>
                                </h3>
                                <p>Personal Web CV Maker ini menjaga privasi data Anda. Anda dapat mengatur tingkat privasi yang Anda inginkan untuk melindungi informasi pribadi Anda.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card-one">
                                <i className="pe-7s-users bg-ff612f"></i>
                                <h3>
                                    <a href="/service-details">Pembaruan Mudah</a>
                                </h3>
                                <p>Saat Anda memperbarui pengalaman atau keterampilan Anda, pembaruan CV juga dapat dilakukan dengan cepat dan mudah.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
