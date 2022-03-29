import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/about.css';
import ReceiverMessage from '../components/ReceiverMessage';
import SenderMessage from '../components/SenderMessage';
import Header from '../components/Header';
import ChatSection from '../components/ChatSection';
import iphoneFrame from '../iphone.png';
import RowButton from '../components/RowButton';
import SocialMediaButton from '../components/SocialMediaButton';
import FadeIn from 'react-fade-in/lib/FadeIn';

const About = () => {

    const conversation = [
        "Hi Yee Choong 😁",
        "Hi there. Nice to meet you ! 😊",
        "Where did you completed your degree?",
        "I'm completed my Software Engineering degree in Universiti Tunku Abdul Rahman (UTAR)",
        "Sounds good. Then what is your current interest in IT industry?",
        "I'm interested in Mobile App Development and also Backend Development"
    ]

    const [next, setNext] = useState(false);

    useEffect(() => {
    }, [next]);

    const mode = useSelector((state) => state.darkMode.value)
    return (
        <div>
            <div className={mode ? "backgroundImg-dark" : "backgroundImg-light"}>
                <div className="container py-5 d-flex flex-column justify-content-center align-items-center h-100">
                    {next ? (
                        <FadeIn>
                            < div className={`about-me`}>
                                <div className={`${mode ? "bg-dark" : "bg-light"} mb-5 text-center rounded-3 shadow-lg d-flex flex-column position-relative`}>
                                    <Header onClick={() => setNext(false)} />
                                    <div className={`${mode ? "bg-dark" : "bg-light"} rounded-3 d-flex flex-column position-relative px-4 py-2 m-1`}>
                                        {conversation.map((chat, index) =>
                                            index % 2 === 0 ? <SenderMessage mode={mode} message={chat} key={index} /> : <ReceiverMessage mode={mode} message={chat} key={index} />
                                        )}
                                    </div>
                                    <ChatSection />
                                </div>
                            </div>
                        </FadeIn>
                    ) : (
                        <div className={`phone-frame d-flex flex-column py-5 `} style={{ backgroundImage: `url(${iphoneFrame})` }}>
                            <div className="d-flex flex-row justify-content-center mt-1 px-5">
                                <div className={`${mode ? "avatar-dark" : "avatar-light"}  py-2 rounded-circle shadow bg-white`} style={{ backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg")` }}></div>
                            </div>
                            <div className="d-flex flex-row justify-content-center mt-3 px-5">
                                <p className='fw-bold fs-5'>See Yee Choong</p>
                            </div>
                            <RowButton title="View More" active onClick={() => setNext(true)} />
                            <RowButton title="Resume" />
                            <RowButton title="Projects" />
                            <SocialMediaButton top firstBtn="facebook" secondBtn="github" />
                            <SocialMediaButton firstBtn="instagram" secondBtn="linkedin" />
                        </div>
                    )}



                    {/* Phone Section */}
                    {/* <div className="phone-frame align-self-center d-flex flex-column py-5 mt-5" style={{ backgroundImage: `url(${iphoneFrame})` }}>
                        <div className="d-flex flex-row justify-content-center mt-1 px-5">
                            <div className={`${mode ? "avatar-dark" : "avatar-light"}  py-2 rounded-circle shadow bg-white`} style={{ backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg")` }}></div>
                        </div>
                        <div className="d-flex flex-row justify-content-center mt-3 px-5">
                            <p className='fw-bold fs-5'>See Yee Choong</p>
                        </div>
                        <RowButton title="View More" active />
                        <RowButton title="Resume" />
                        <RowButton title="Projects" />
                        <SocialMediaButton top firstBtn="facebook" secondBtn="github" />
                        <SocialMediaButton firstBtn="instagram" secondBtn="linkedin" />
                    </div> */}
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

