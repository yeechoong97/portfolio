import React from 'react';
import { useSelector } from 'react-redux';
import './css/resume.css';

function Project() {

    const mode = useSelector((state) => state.darkMode.value)

    return (
        <div>
            <section className={mode ? "backgroundImg-resume-dark pb-2" : "backgroundImg-resume-light pb-2"}>
                <div className="container">
                    <div className="w-75 mx-auto my-5 text-center">
                        <label className={mode ? "page-title-dark pt-4" : "page-title-light pt-4"}><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960477/Portfolio/ProjectIcon.png" width="30" height="30" className="d-inline-block mr-2 mb-1" />Projects</label>
                    </div>
                    <div className={`${mode ? "bg-dark highlight-box-light" : "bg-white highlight-box-dark"} row mx-auto my-5 w-75 position-relative`}>
                        <div className={mode ? "position-test-dark" : "position-test-light"}></div>
                        <div className={`${mode ? "text-white" : "text-dark"} col-md-7 py-5 pl-5 pr-4`}>
                            <h4 className="year-title">FOREX E - Learning and Currency Exchange Simulation Platform</h4>
                            <p className="font-weight-bold text-uppercase">Web Application</p>
                            <p className="font-weight-light">The final year project focused on providing opportunities for a new beginner trader to learn to trade in the forex market.This project has incorporated many tools such as Laravel framework, HTML, CSS, Javascript, jQuery, MySQL, NodeJS, Anychart, and external RESTful API. The system was deployed in the Heroku cloud platform for further usage in the project.</p>
                            <ul className="tags">
                                <li><span className={mode ? "tag-dark" : "tag-light"}>HTML</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>CSS</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>JavaScript</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>PHP</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>NodeJS</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>Heroku</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>Laravel</span></li>
                            </ul>
                        </div>
                        <div className="col-md-5 no-padding">
                            <img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960493/Portfolio/Forex.jpg" className="d-inline-block img-resize" />
                        </div>
                    </div>
                    <div className={`${mode ? "bg-dark highlight-box-light" : "bg-white highlight-box-dark"} row mx-auto my-5 w-75 position-relative`}>
                        <div className={mode ? "position-test-dark" : "position-test-light"}></div>
                        <div className={`${mode ? "text-white" : "text-dark"} col-md-7 py-5 pl-5 pr-4`}>
                            <h4 className="year-title">Volunteer Management System</h4>
                            <p className="font-weight-bold text-uppercase">Web Application</p>
                            <p className="font-weight-light">This project was conducted from May 2019 until Sept 2019 in the subject called Team Project. This project is mainly focused on developing the features and functions of the newsystem for the dedicated client (CyberCare Organization) in this project. This system was developed by using the Laravel framework with PHP, Javascript, HTML, and CSS. This new system is created to improve the efficiency of the administrative work in the organization.</p>
                            <ul className="tags">
                                <li><span className={mode ? "tag-dark" : "tag-light"}>HTML</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>CSS</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>JavaScript</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>PHP</span></li>
                                <li><span className={mode ? "tag-dark" : "tag-light"}>Laravel</span></li>
                            </ul>
                        </div>
                        <div className="col-md-5 no-padding">
                            <img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960476/Portfolio/Management.png" className="d-inline-block img-resize" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}



export default Project;

