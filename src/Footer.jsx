import React from 'react';
import './css/Footer.css';

function Footer() {
    return ( 
        <div>
            <footer id="footerpad">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-8 mx-auto">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/see.yeechoong" target="_blank" rel="noreferrer"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/yeechoong97" target="_blank" rel="noreferrer"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/yee_choong97/" target="_blank" rel="noreferrer"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/see-yee-choong-405a471bb/" target="_blank" rel="noreferrer"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a></li>
                                </ul>
                                <p className="copyright text-muted text-center">© 2021 by See Yee Choong</p>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>

    );
}

export default Footer;
