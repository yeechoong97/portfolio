import React from 'react'
import { resumeCategory } from '../data'

const ResumeHeader = ({ currentIndex, navigatePage }) => {


    return (
        <>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <div>
                    <a className="fa-solid fa-cloud-arrow-down text-info px-2 text-decoration-none" href="/Resume.pdf" target="_blank" title="Resume" download></a>
                    <strong className="text-muted mx-1 fs-6">{resumeCategory[currentIndex]}</strong>
                </div>
                <div>
                    <i className="fa-solid fa-circle-chevron-left text-danger px-2" role="button" onClick={currentIndex <= 0 ? () => navigatePage(currentIndex) : () => navigatePage(currentIndex - 1)}></i>
                    <i className="fa-solid fa-circle-chevron-right text-primary px-2" role="button" onClick={currentIndex >= 2 ? () => navigatePage(currentIndex) : () => navigatePage(currentIndex + 1)}></i>
                </div>
            </div>
        </>
    )
}

export default ResumeHeader