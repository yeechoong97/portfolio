import React from 'react'

const ChatSection = ({ mode }) => {

    const SelectStyle = {
        maxWidth: "100%",
        backgroundColor: "white",
    }

    const SendStyle = {
        maxWidth: "100%",
        backgroundColor: "#a6e9d5",
    }

    return (
        <div className="d-flex flex-row position-relative py-3 px-4 align-items-center justify-content-between border-top">
            <div className="d-flex flex-row p-1">
                <div className="p-2 mx-2 rounded-3 shadow-sm " style={SelectStyle}>
                    <div className="text-start fs-6 fw-light">Yee Choong</div>
                </div>
                <div className="p-2  mx-2 rounded-3 shadow-sm" style={SelectStyle}>
                    <div className="text-start fs-6 fw-light">Yee Choong</div>
                </div>
                <div className="p-2  mx-2 rounded-3 shadow-sm" style={SelectStyle}>
                    <div className="text-start fs-6 fw-light ">Yee Choong</div>
                </div>
                <div className="p-2  mx-2 rounded-3 shadow-sm" style={SelectStyle}>
                    <div className="text-start fs-6 fw-light ">Yee Choong</div>
                </div>
                <div className="p-2  mx-2 rounded-3 shadow-sm" style={SelectStyle}>
                    <div className="text-start fs-6 fw-light ">Yee Choong</div>
                </div>
            </div>
            <div>
                <div className="py-2 px-3 rounded-3 shadow-sm" style={SendStyle} >
                    <div className="text-start fs-6 fw-bold ">Send</div>
                </div>
            </div>
        </div>

    )
}

export default ChatSection


