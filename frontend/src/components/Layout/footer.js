import React, { Component } from 'react';
import '../../styles/styles.css';
import '../../styles/bootstrap.min.css'
import '../../styles/responsive.css';
import '../../styles/rtl.css.map';
import 'animate.css';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="copyright-area">
                    <div className="container">
                        <a href="/">
                            <img src="/images/logo.png" alt="image" />
                        </a>
                        <p>Copyright &copy; {currentYear} Moderate 1 Team. All Rights Reserved By <a href="https://moderate1" target="_blank">Moderate Team 1</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
