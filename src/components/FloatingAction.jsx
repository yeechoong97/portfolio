import React from 'react'
import "../css/fab.css"

const FloatingAction = () => {

    return (
        <>
            <div className="floating-container">
                <div className="floating-button"><i className="fa-solid fa-bars"></i></div>
                <div className="element-container">
                    <a href="/" title="About Me">
                        <span className="float-element about">
                            <i className="fa-solid fa-user-graduate"></i>
                        </span>
                    </a>
                    <a href="/resume" title="Resume">
                        <span className="float-element resume" >
                            <i className="fa-solid fa-file-lines"></i>
                        </span>
                    </a>
                    <a href="/projects" title="Projects">
                        <span className="float-element project">
                            <i className="fa-solid fa-list-check"></i>
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FloatingAction