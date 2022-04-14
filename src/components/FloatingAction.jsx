import React from 'react'
import "../css/fab.css"

const FloatingAction = () => {

    return (
        <>
            <div class="floating-container">
                <div class="floating-button"><i class="fa-solid fa-bars"></i></div>
                <div class="element-container">
                    <a href="/" title="About Me">
                        <span class="float-element about">
                            <i class="fa-solid fa-user-graduate"></i>
                        </span>
                    </a>
                    <a href="/resume" title="Resume">
                        <span class="float-element resume" >
                            <i class="fa-solid fa-file-lines"></i>
                        </span>
                    </a>
                    <a href="/projects" title="Projects">
                        <span class="float-element project">
                            <i class="fa-solid fa-list-check"></i>
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FloatingAction