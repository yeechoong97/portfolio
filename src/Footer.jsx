import React from 'react';
import { useSelector } from 'react-redux';
import './css/Footer.css';

function Footer() {

    const mode = useSelector((state) => state.darkMode.value)

    return (
        <div>
            <footer className={mode ? "footerpad-dark" : "footerpad-white"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8 mx-auto">
                            <div className="wrapper">
                                <a className={`${mode ? "icon-dark" : "icon-light"} facebook`} href="https://www.facebook.com/see.yeechoong" target="_blank" rel="noreferrer">
                                    <div className="tooltip">Facebook</div>
                                    <span><i className="fa fa-facebook-f"></i></span>
                                </a>
                                <a className={`${mode ? "icon-dark" : "icon-light"} linkedin`} href="https://www.linkedin.com/in/see-yee-choong-405a471bb/" target="_blank" rel="noreferrer">
                                    <div className="tooltip">LinkedIn</div>
                                    <span><i className="fa fa-linkedin"></i></span>
                                </a>
                                <a className={`${mode ? "icon-dark" : "icon-light"} instagram`} href="https://www.instagram.com/yee_choong97/" target="_blank" rel="noreferrer">
                                    <div className="tooltip">Instagram</div>
                                    <span><i className="fa fa-instagram"></i></span>
                                </a>
                                <a className={`${mode ? "icon-dark" : "icon-light"} github`} href="https://github.com/yeechoong97" target="_blank" rel="noreferrer">
                                    <div className="tooltip">Github</div>
                                    <span><i className="fa fa-github"></i></span>
                                </a>
                            </div>
                            <p className={`${mode ? "" : "text-white"} copyright text-muted text-center`}>© 2021 by See Yee Choong</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Footer;
