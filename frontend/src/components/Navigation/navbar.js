import React, { Component } from 'react';
import '../../styles/styles.css';
import '../../styles/bootstrap.min.css';
import '../../styles/responsive.css';
import '../../styles/rtl.css.map';
import 'animate.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <div id="navbar" className="navbar-area">
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                    <Link to="/" className="navbar-brand ml-auto">
                        <img src="../../images/logo.png" alt="logo" />
                    </Link>

                        {/* Toggle navigation */}
                        <button
                            onClick={this.toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">

                            <div className="others-options">
                                <a href="/login" className="btn btn-primary">
                                    Login
                                </a>
                            </div>

                            <div className="others-options">
                                <a href="/registrasi" className="btn btn-primary">
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
