import React from 'react';
import { useSelector } from 'react-redux';
import './css/about.css';

const About = () => {

    const mode = useSelector((state) => state.darkMode.value)
    return (
        <div style={{ paddingTop: "56px" }}>
            <div className={mode ? "backgroundImg-dark" : "backgroundImg-light"}>
                <div className="container py-5">
                    <div className={`${mode ? "avatar-dark" : "avatar-light"}  py-2`} style={{ backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg")` }}></div>
                    <div className={`${mode ? "name-label-dark" : "name-label-light"} mb-4`}>See Yee Choong</div>
                    <div className="about-me">
                        <div className={`${mode ? "p-border-dark" : "p-border-light"} px-3 py-3 text-center`}>
                            <p className={`p-index  ${mode ? "text-white" : "text-dark"}`}>Hello! I am <strong>See Yee Choong</strong>, a Fresh Graduate Software Engineering Student at <a className={mode ? "college-link-dark" : "college-link-light"} href="https://www.utar.edu.my/">University Tunku Abdul Rahman</a>. I'm interested in developing backend system and mobile application.</p>
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <a className={`${mode ? "button--mimas-dark" : "button--mimas-light"} button mx-2 my-1`} role="button" href="/resume"><span>Resume</span></a>
                        <a className={`${mode ? "button--mimas-dark" : "button--mimas-light"} button mx-2 my-1`} role="button" href="/projects"><span>Projects</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default About;

