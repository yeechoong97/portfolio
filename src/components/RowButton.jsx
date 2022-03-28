import React from 'react'
import '../css/about.css';

const RowButton = ({ title, active }) => {
    return (
        <>
            <div className={`${active ? "bg-active" : "bg-light"} rounded-3 shadow w-75 align-self-center my-1 d-flex flex-row justify-content-between`}>
                <div className={`${active ? "text-white" : "text-dark"} fw-light fs-6 px-3 py-2`}>{title}</div>
                <i className={`${active ? "text-white" : "text-dark"} fa fa-chevron-right py-2 px-3 mt-1`}></i>
            </div>
        </>
    )
}

export default RowButton
