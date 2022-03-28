import React from 'react'
import "../css/chat.css"


const ChatSection = ({ mode }) => {

    const SendStyle = {
        maxWidth: "100%",
        backgroundColor: "#a6e9d5",
    }

    const TypingStye = {
        width: "100%",
        backgroundColor: "white",
    }

    return (
        <div className="d-flex flex-row position-relative py-2 px-4 align-items-center justify-content-between border-top">
            <div className="d-flex flex-row p-1 w-100">
                <div className="p-2 me-2 rounded-3 shadow-sm typewriter" style={TypingStye}>
                    <div className="text-start fs-6 fw-light message-content">Tell me more.....</div>
                </div>
            </div>
            <div>
                <a className="py-2 px-3 rounded-3 shadow-sm text-start fs-5 text-decoration-none text-dark" style={SendStyle} role="button" href="/resume"><span>Send</span></a>
            </div>
        </div>

    )
}

export default ChatSection


