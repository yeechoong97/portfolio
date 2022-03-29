import React from 'react'
import '../css/about.css';

const SocialMediaButton = ({ top, firstBtn, secondBtn }) => {

    const contents = [
        {
            name: 'facebook',
            background: 'bg-facebook',
            icon: 'fa-facebook-f'
        },
        {
            name: 'github',
            background: 'bg-github',
            icon: 'fa-github',
        },
        {
            name: 'instagram',
            background: 'bg-instagram',
            icon: 'fa-instagram'
        },
        {
            name: 'linkedin',
            background: 'bg-linkedin',
            icon: 'fa-linkedin',
        },

    ]

    return (
        <>
            <div className={`${top ? "mt-3" : ""} d-flex flex-row h-25 justify-content-between px-4 mx-3 `}>
                <div className={`${contents.find(element => element.name === firstBtn).background} h-75 my-2 rounded-3 shadow d-flex flex-column justify-content-center w-100 mx-1`}>
                    <span><i className={`fa ${contents.find(element => element.name === firstBtn).icon} fs-1 text-white w-100 text-center`}></i></span>
                </div>
                <div className={`${contents.find(element => element.name === secondBtn).background} h-75 my-2 rounded-3 shadow d-flex flex-column justify-content-center w-100 mx-1`}>
                    <span><i className={`fa ${contents.find(element => element.name === secondBtn).icon} fs-1 text-white w-100 text-center`}></i></span>
                </div>
            </div>
        </>
    )
}
export default SocialMediaButton
