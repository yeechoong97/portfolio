import React from 'react'

const Header = ({ mode }) => {

    const ChevronStyle = {
        height: "40px",
        width: "20px",
    }

    const EmailStyle = {
        height: "30px",
        width: "30px",
    }

    return (
        <div className="d-flex flex-row position-relative py-2 px-4 border-bottom align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
                <div style={ChevronStyle} className="pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" /></svg>
                </div>
                <div className="text-start fs-4 fw-bold ms-2">Yee Choong</div>
            </div>
            <div className="align-self-end bg-white" style={EmailStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" /></svg>
            </div>
        </div>

    )
}

export default Header


