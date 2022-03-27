import React from 'react';
import { useSelector } from 'react-redux';
import '../css/about.css';
import ReceiverMessage from '../components/ReceiverMessage';
import SenderMessage from '../components/SenderMessage';
import Header from '../components/Header';
import ChatSection from '../components/ChatSection';

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
                <div className="container py-5">
                    <div className={`${mode ? "avatar-dark" : "avatar-light"}  py-2`} style={{ backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg")` }}></div>
                    <div className={`${mode ? "name-label-dark" : "name-label-light"} mb-4`}>See Yee Choong</div>
                    <div className="about-me">
                        <div className={`${mode ? "bg-dark" : "bg-light"} mb-5 text-center rounded-3 shadow-lg d-flex flex-column position-relative`}>
                            {/* <p className={`fs-4 ${mode ? "text-white" : "text-dark"}`}>Hello! I am <strong>See Yee Choong</strong>, a Fresh Graduate Software Engineering Student at <a className={mode ? "college-link-dark" : "college-link-light"} href="https://www.utar.edu.my/">University Tunku Abdul Rahman</a>. I'm interested in developing backend system and mobile application.</p> */}
                            <Header />
                            <div className={`${mode ? "bg-dark" : "bg-light"} rounded-3 d-flex flex-column position-relative px-4 py-2 m-1`}>
                                {conversation.map((chat, index) =>
                                    index % 2 === 0 ? <SenderMessage mode={mode} message={chat} key={index} /> : <ReceiverMessage mode={mode} message={chat} key={index} />
                                )}
                            </div>
                            <ChatSection />
                        </div>
                    </div>
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

