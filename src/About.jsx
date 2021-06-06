import React from 'react';
import './css/about.css';

function About() {
    return ( 
        <div>
            <section className="backgroundImg" style={{backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960131/Portfolio/Background.jpg")`, backgroundSize: "cover"}}>
            <div className="container py-5">
                <div className="avatar py-2" style={{backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg")`}}></div>
                <div className="name-label mb-4">See Yee Choong</div>
                <div className="about-me">
                    <div className="p-border px-3 py-3 text-center">
                        <p className="p-index text-white">Hello! I am <strong>See Yee Choong</strong>, a Fresh Graduate Software Engineering Student at University Tunku Abdul Rahman (UTAR). Interested in developing backend system and mobile application.</p>
                    </div>
                </div>
                <div className="text-center my-4">
                    <a className="btn btn-align btn-resume mx-2 my-1" role="button" href="/resume">Resume</a>
                    <a className="btn btn-align btn-project mx-2 my-1" role="button" href="/projects">Projects</a>
                </div>
            </div>
            </section>
        </div>
    );
}



export default About;

