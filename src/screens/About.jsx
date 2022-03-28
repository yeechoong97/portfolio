import React from 'react';
import { useSelector } from 'react-redux';
import '../css/about.css';
import ReceiverMessage from '../components/ReceiverMessage';
import SenderMessage from '../components/SenderMessage';
import Header from '../components/Header';
import ChatSection from '../components/ChatSection';
import iphoneFrame from '../iphone.png';
import RowButton from '../components/RowButton';

const About = () => {

    const conversation = [
        "Hi Yee Choong 😁",
        "Hi there. Nice to meet you ! 😊",
        "Where did you completed your degree?",
        "I'm completed my Software Engineering degree in Universiti Tunku Abdul Rahman (UTAR)",
        "Sounds good. Then what is your current interest in IT industry?",
        "I'm interested in Mobile App Development and also Backend Development"
    ]

    const mode = useSelector((state) => state.darkMode.value)
    return (
        <div>
            <div className={mode ? "backgroundImg-dark" : "backgroundImg-light"}>
                <div className="container py-5 d-flex flex-column">
                    {/* <div className={`${mode ? "avatar-dark" : "avatar-light"}  py-2`} style={{ backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg")` }}></div> */}
                    {/* <div className={`${mode ? "name-label-dark" : "name-label-light"} mb-4`}>See Yee Choong</div> */}

                    {/* ChatSection */}
                    {/* <div className="about-me">
                        <div className={`${mode ? "bg-dark" : "bg-light"} mb-5 text-center rounded-3 shadow-lg d-flex flex-column position-relative`}>
                            <Header />
                            <div className={`${mode ? "bg-dark" : "bg-light"} rounded-3 d-flex flex-column position-relative px-4 py-2 m-1`}>
                                {conversation.map((chat, index) =>
                                    index % 2 === 0 ? <SenderMessage mode={mode} message={chat} key={index} /> : <ReceiverMessage mode={mode} message={chat} key={index} />
                                )}
                            </div>
                            <ChatSection />
                        </div>
                    </div> */}
                    {/* ChatSection End */}

                    {/* Phone Section */}
                    <div className="phone-frame align-self-center d-flex flex-column py-5" style={{ backgroundImage: `url(${iphoneFrame})` }}>
                        <div className="d-flex flex-row justify-content-center mt-1 px-5">
                            <div className={`${mode ? "avatar-dark" : "avatar-light"}  py-2 rounded-circle shadow bg-white`} style={{ backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg")` }}></div>
                        </div>
                        <div className="d-flex flex-row justify-content-center mt-3 px-5">
                            <p className='fw-bold fs-5'>See Yee Choong</p>
                        </div>
                        {/* <div className="bg-active rounded-3 shadow w-75 align-self-center my-1 d-flex flex-row justify-content-between ">
                            <div className="fw-light fs-6 px-3 py-2 text-white">View More</div>
                            <i className='fa fa-chevron-right py-2 px-3 mt-1 text-white'></i>
                        </div>
                        <div className="bg-light rounded-3 shadow w-75 align-self-center my-1 d-flex flex-row justify-content-between">
                            <div className="fw-light fs-6 px-3 py-2">Resume</div>
                            <i className='fa fa-chevron-right py-2 px-3 mt-1'></i>
                        </div>
                        <div className="bg-light rounded-3 shadow w-75 align-self-center my-1 d-flex flex-row justify-content-between mb-4">
                            <div className="fw-light fs-6 px-3 py-2">Projects</div>
                            <i className='fa fa-chevron-right py-2 px-3 mt-1'></i>
                        </div> */}
                        <RowButton title="View More" active />
                        <RowButton title="Resume" />
                        <RowButton title="Projects" />
                        <div className="d-flex flex-row h-25 justify-content-between px-4 mx-3">
                            <div className="bg-facebook h-75 my-2 rounded-3 shadow d-flex flex-column justify-content-center w-100 mx-1">
                                <span><i className="fa fa-facebook-f fs-1 text-white w-100 text-center"></i></span>
                            </div>
                            <div className="bg-github h-75 my-2 rounded-3 shadow d-flex flex-column justify-content-center w-100 mx-1">
                                <span><i className="fa fa-github fs-1 text-white w-100 text-center"></i></span>
                            </div>
                        </div>
                        <div className="d-flex flex-row h-25 justify-content-between px-4 mx-3">
                            <div className="bg-instagram h-75 rounded-3 shadow d-flex flex-column justify-content-center w-100 mx-1">
                                <span><i className="fa fa-instagram fs-1 text-white w-100 text-center"></i></span>
                            </div>
                            <div className="bg-linkedin h-75 rounded-3 shadow d-flex flex-column justify-content-center w-100 mx-1">
                                <span><i className="fa fa-linkedin fs-1 text-white w-100 text-center"></i></span>
                            </div>
                        </div>

                    </div>

                    {/* Phone Section End */}
                    {/* <div className="text-center my-4">
                        <a className={`${mode ? "button--mimas-dark" : "button--mimas-light"} button mx-2 my-1`} role="button" href="/resume"><span>Resume</span></a>
                        <a className={`${mode ? "button--mimas-dark" : "button--mimas-light"} button mx-2 my-1`} role="button" href="/projects"><span>Projects</span></a>
                    </div> */}
                </div>
            </div>
        </div >
    );
}



export default About;

