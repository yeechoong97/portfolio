import React from 'react'
import "../css/fab.css"

const FloatingAction = () => {

    return (
        <>
            <div className="d-flex flex-row justify-content-evenly px-1 py-2 bg-floating fixed-top w-100 rounded-bottom-only">
                <a href="/" title="About Me" className="float-element about text-decoration-none mx-4" role="button">
                    <i className="fa-solid fa-user-graduate"></i>
                </a>
                <a href="/resume" title="Resume" className="float-element resume text-decoration-none mx-4" role="button">
                    <i className="fa-solid fa-file-lines"></i>
                </a>
                <a href="/projects" title="Projects" className="float-element project text-decoration-none mx-4" role="button">
                    <i className="fa-solid fa-list-check"></i>
                </a>
            </div>
        </>
    )
}

export default FloatingAction