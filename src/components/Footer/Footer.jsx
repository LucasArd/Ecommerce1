import React from "react";
import { Fragment } from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <Fragment>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Art at the S.T Gallery. Art from the Light Dimension. Lightscapes & Dreamscapes. Hybrid & Transdiciplinary Art</p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <Link to ="http://localhost:3000"><li><span >Home</span></li></Link>
                                <Link to ="http://localhost:3000/category/BlackWhite"><li><span >B&W</span></li></Link>
                                <Link to ="http://localhost:3000/category/Color"><li><span >Colors</span></li></Link>
                                <Link to ="http://localhost:3000/category/Oil%20Paint"><li><span >Oil Paint</span></li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by <Link to={"https://github.com/LucasArd"}>https://github.com/LucasArd</Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <Link to={"https://www.facebook.com/santii.trigo"}><li className="iconbrand" ><span href="#"><FontAwesomeIcon icon={faFacebook} size="4x" /></span></li></Link>
                                <Link to={"https://www.instagram.com/sntgtrg/"}><li className="iconbrand"><span href="#"><FontAwesomeIcon icon={faInstagram} size="4x" /></span></li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;