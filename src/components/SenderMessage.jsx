import React from 'react'

const SenderMessage = ({ message }) => {

    const AvatarStyle = {
        position: "absolute",
        top: 0,
        right: -50,
        height: "40px",
        width: "40px",
    }

    const MessageStyle = {
        backgroundColor: "#a6e9d5",
        maxWidth: "80%",
        maxHeight: "100%"
    }

    const LabelStyle = {
        position: "absolute",
        top: 40,
        right: -39,
        fontSize: 11,
    }

    return (
        <div className="p-3 me-5 mt-3 mb-3 align-self-end rounded-3 position-relative" style={MessageStyle}>
            <img src="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/32/000000/external-avatar-interface-anggara-filled-outline-anggara-putra.png" style={AvatarStyle} alt="default" />
            <div style={LabelStyle} className="text-secondary">You</div>
            <div className={`text-start ${message === " " ? "loading" : ""}`}>{message}</div>
        </div>

    )
}

export default SenderMessage
