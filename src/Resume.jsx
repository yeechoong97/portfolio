import React from 'react';
import { useSelector } from 'react-redux';
import './css/resume.css';

const Resume = () => {

    const mode = useSelector((state) => state.darkMode.value)

    return (
        <div>
            <section className={mode ? "backgroundImg-resume-dark pb-2" : "backgroundImg-resume-light pb-2"} >
                <div className="container ">
                    <div className="w-50 mx-auto my-5 text-center pt-4">
                        <label className={mode ? "page-title-dark" : "page-title-light"}><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960653/Portfolio/ResumeIcon.png" width="30" height="30" className="d-inline-block mr-2 mb-1" />Resume</label>
                    </div>
                    <div className="row w-60 mx-auto mt-5">
                        <h3 className={`${mode ? "text-white" : "text-dark"}  col-sm-3 px-0 adjust-font`}>Education</h3>
                        <div className="col-sm-3 px-0">
                            <a className={`button-download ${mode ? "button--pan-dark" : "button--pan-light"}`} role="button" rel="noreferrer" href="https://drive.google.com/file/d/14iah6hdyx_zlCAqSgoa8Hi2FB9v52q5U/view?usp=sharing" target="_blank"><span>Download</span></a>
                        </div>
                    </div>
                    <div className={`${mode ? "bg-white highlight-box-light" : "bg-dark highlight-box-dark"} row mx-auto my-4 w-60`}>
                        <div className={`${mode ? "text-dark" : "text-white"} col-md-5 py-5 px-4`}>
                            <h4 className="year-title">2018 - 2021</h4>
                            <p className="font-weight-bold text-uppercase">University Tunku Abdul Rahman (UTAR)</p>
                            <p className="font-weight-light">Bachelor of Science (Hons) Software Engineering</p>
                        </div>
                        <div className={`${mode ? "bg-dark" : "bg-white"} col-md-7 py-5 px-4 `}>
                            <ul className={mode ? "ul-font-dark" : "ul-font-light"}>
                                <li>CGPA: <b>3.3907</b></li>
                                <li>Dean List <br /><small className="text-muted">May 2020</small></li>
                                <li>Auditor, 24 Festive Drum Unit <br /><small className="text-muted ">2020-2021</small ></li>
                                <li>Committee, 24 Festive Drum Unit <br /><small className="text-muted">2019-2020</small ></li>
                                <li>Participant of Microsoft Insider Dev Tour Kuala Lumpur 2019<br /><small className="text-muted ">22 June 2019</small ></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${mode ? "bg-white highlight-box-light" : "bg-dark highlight-box-dark"} row mx-auto my-4 w-60`}>
                        <div className={`${mode ? "text-dark" : "text-white"} col-md-5 py-5 px-4`}>
                            <h4 className="year-title">2015 - 2017</h4>
                            <p className="font-weight-bold text-uppercase">Asia Pacific University (APU)</p>
                            <p className="font-weight-light">Diploma in Information and Communications Technology Specialism in Software Engineering</p>
                        </div>
                        <div className={`${mode ? "text-white bg-dark" : "text-dark bg-white"} col-md-7 py-5 px-4`}>
                            <ul>
                                <li>CGPA: <b>3.76</b></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row w-60 mx-auto mt-5">
                        <h3 className={`${mode ? "text-white" : "text-dark"} col-sm-5 px-0`}>Working Experience</h3>
                    </div>
                    <div className={`${mode ? "bg-white highlight-box-light" : "bg-dark highlight-box-dark"} row mx-auto my-4 w-60`}>
                        <div className={`${mode ? "text-dark" : "text-white"} col-md-5 py-4 px-4`}>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960589/Portfolio/ListIcon.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-bold text-uppercase">Mobile Tester</label><br /><label className="font-weight-light ml-4">Hong Leong Bank Berhad</label><br /><small className="ml-4 text-muted">Oct 2020 - Jan 2021</small></p>
                        </div>
                        <div className={`${mode ? "bg-dark text-white" : "bg-white text-dark"} col-md-7 py-4 px-4`}>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960589/Portfolio/ListIcon.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-bold text-uppercase">Porter Service</label><br /><label className="font-weight-light ml-4">Big Bad Wolf</label><br /><small className="ml-4 text-muted">Dec 2018</small></p>
                        </div>
                        <div className={`${mode ? "text-dark" : "text-white"} col-md-5 py-4 px-4`}>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960589/Portfolio/ListIcon.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-bold text-uppercase">Cashier</label><br /><label className="font-weight-light ml-4">S.Y Enterprise</label><br /><small className="ml-4 text-muted">June 2017 - May 2018</small></p>
                        </div>
                        <div className={`${mode ? "bg-dark text-white" : "bg-white text-dark"} col-md-7 py-4 px-4`}>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960589/Portfolio/ListIcon.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-bold text-uppercase">Waiter</label><br /><label className="font-weight-light ml-4">Steamboat Restaurant</label><br /><small className="ml-4 text-muted">Oct 2015 - Dec 2015</small></p>
                        </div>
                        <div className={`${mode ? "text-dark" : "text-white"} col-md-5 py-4 px-4`}>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960589/Portfolio/ListIcon.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-bold text-uppercase">Kitchen Helper</label><br /><label className="font-weight-light ml-4">Ginza Japanese Restaurant</label><br /><small className="ml-4 text-muted">Feb 2015 - May 2015</small></p>
                        </div>
                        <div className={`${mode ? "bg-dark text-white" : "bg-white text-dark"} col-md-7 py-4 px-4`}></div>
                    </div>
                    <div className="row w-60 mx-auto mt-5">
                        <h3 className={`${mode ? "text-white" : "text-dark"} col-sm-5 px-0`}>Technical Skills</h3>
                    </div>
                    <div className={`${mode ? "bg-white highlight-box-light" : "bg-dark highlight-box-dark"} row mx-auto mt-4 mb-5 w-60`}>
                        <div className={`${mode ? "text-dark" : "text-white"} col-md-5 py-5 px-4`}>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960402/Portfolio/images/react_wtcsfk.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">React JS</label></p>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960400/Portfolio/images/nodejs_mkp9gy.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">Node JS</label></p>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960399/Portfolio/images/java_nzot1c.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">Java</label></p>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960399/Portfolio/images/kotlin_x6k7pd.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">Kotlin</label></p>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960403/Portfolio/images/swift_xzyoky.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">Swift</label></p>

                        </div>
                        <div className={`${mode ? "text-white bg-dark" : "bg-white text-dark"} col-md-7 py-5 px-4`}>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960402/Portfolio/images/react_wtcsfk.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">React Native</label></p>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960397/Portfolio/images/html_vqih5d.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">HTML, CSS, JS</label></p>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960395/Portfolio/images/asp_mukat7.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">ASP .Net</label></p>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960397/Portfolio/images/cs_em5fiz.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">C#</label></p>
                            <p><img alt="" src="https://res.cloudinary.com/fyp202105/image/upload/v1622960401/Portfolio/images/php_me5bpj.png" width="20" height="20" className="d-inline-block mr-2 mb-1" /><label className="font-weight-light ">PHP</label></p>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}



export default Resume;

