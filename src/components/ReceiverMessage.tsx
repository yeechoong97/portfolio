import React, { FunctionComponent } from 'react'
import { MessageProps } from '../types'

const ReceiverMessage: FunctionComponent<MessageProps> = ({ message }) => {

    const AvatarStyle = {
        position: "absolute",
        top: 0,
        left: -50,
        height: "40px",
        width: "37px",
    } as React.CSSProperties

    const MessageStyle = {
        backgroundColor: "#9eeaf9",
        maxWidth: "80%",
        maxHeight: "100%"
    } as React.CSSProperties

    const LabelStyle = {
        position: "absolute",
        top: 43,
        left: -55,
        fontSize: 9,
    } as React.CSSProperties

    return (
        <div className="p-3 ms-5 mt-3 mb-3 align-self-start rounded-3 position-relative" style={MessageStyle}>
            <img src="https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg" style={AvatarStyle} className="rounded-circle" alt="myself" />
            <div style={LabelStyle} className="text-secondary">Yee Choong</div>
            <div className="text-start">{message}</div>
        </div>

    )
}

export default ReceiverMessage


