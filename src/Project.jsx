import React from 'react';
import './css/resume.css';

function Project() {
    return ( 
        <div>
            <section>
                <div className="container ">
                    <div className="w-75 mx-auto my-5 text-center">
                        <label className="page-title"><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960477/Portfolio/ProjectIcon.png" width="30" height="30" className="d-inline-block mr-2 mb-1"/>Projects</label>
                    </div>
                        <div className="row mx-auto my-5 highlight-box bg-white w-75 position-relative">
                            <div className="position-test"></div>
                            <div className="col-md-7 py-5 pl-5 pr-4">
                                <h4 className="year-title">FOREX E - Learning and Currency Exchange Simulation Platform</h4>
                                <p className="font-weight-bold text-uppercase">Web Application</p>
                                <p className="font-weight-light">The final year project focused on providing opportunities for a new beginner trader to learn to trade in the forex market.This project has incorporated many tools such as Laravel framework, HTML, CSS, Javascript, jQuery, MySQL, NodeJS, Anychart, and external RESTful API. The system was deployed in the Heroku cloud platform for further usage in the project.</p>
                                <ul className="tags">
                                    <li><a href="#" className="tag">HTML</a></li>
                                    <li><a href="#" className="tag">CSS</a></li>
                                    <li><a href="#" className="tag">JavaScript</a></li>
                                    <li><a href="#" className="tag">PHP</a></li>
                                    <li><a href="#" className="tag">NodeJS</a></li>
                                    <li><a href="#" className="tag">Heroku</a></li>
                                    <li><a href="#" className="tag">Laravel</a></li>
                                </ul>
                            </div>
                            <div className="col-md-5 no-padding">
                                <img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960493/Portfolio/Forex.jpg" className="d-inline-block img-resize"/>
                            </div>
                        </div>
                        <div className="row mx-auto my-5 highlight-box bg-white w-75 position-relative">
                            <div className="position-test"></div>
                            <div className="col-md-7 py-5 pl-5 pr-4">
                                <h4 className="year-title">Volunteer Management System</h4>
                                <p className="font-weight-bold text-uppercase">Web Application</p>
                                <p className="font-weight-light">This project was conducted from May 2019 until Sept 2019 in the subject called Team Project. This project is mainly focused on developing the features and functions of the newsystem for the dedicated client (CyberCare Organization) in this project. This system was developed by using the Laravel framework with PHP, Javascript, HTML, and CSS. This new system is created to improve the efficiency of the administrative work in the organization.</p>
                                <ul className="tags">
                                    <li><a href="#" className="tag">HTML</a></li>
                                    <li><a href="#" className="tag">CSS</a></li>
                                    <li><a href="#" className="tag">JavaScript</a></li>
                                    <li><a href="#" className="tag">PHP</a></li>
                                    <li><a href="#" className="tag">Laravel</a></li>
                                </ul>
                            </div>
                            <div className="col-md-5 no-padding">
                                <img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960476/Portfolio/Management.png" className="d-inline-block img-resize"/>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}



export default Project;

