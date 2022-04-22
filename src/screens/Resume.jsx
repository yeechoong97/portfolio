import React, { useState, useEffect } from 'react';
import BackgroundEffect from '../components/BackgroundEffect';
import EducationComponent from '../components/EducationComponent';
import ResumeHeader from '../components/ResumeHeader';
import SkillsComponent from '../components/SkillsComponent';
import WorkComponent from '../components/WorkComponent';
import '../css/resume.css';


const Resume = () => {

    const [page, setPage] = useState(0);

    useEffect(() => { }, [page]);

    return (
        <>
            <div className="backgroundImg-light">
                <BackgroundEffect />
                <div className='container d-flex flex-column justify-content-center align-items-center h-100 p-5 '>
                    <div className="rounded-3 border shadow w-100 h-75 bg-container d-flex flex-column justify-content-start align-item-center main-resume">
                        <div className='border-bottom p-2 fs-5 bg-light'>
                            <ResumeHeader title="Education" currentIndex={page} navigatePage={setPage} />
                        </div>
                        <div className="d-flex flex-column justify-content-between p-3 overflow-auto">
                            {
                                page === 0 ? (<EducationComponent />) : page === 1 ? (<WorkComponent />) : (<SkillsComponent />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Resume;

