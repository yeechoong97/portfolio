import React from 'react'
import { useNavigate } from 'react-router-dom';
import RowButton from '../components/RowButton';
import SocialMediaButton from '../components/SocialMediaButton';
import iphoneFrame from '../iphone.png';

const PhoneComponent = ({ setNext }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className={`phone-frame d-flex flex-column py-5 `} style={{ backgroundImage: `url(${iphoneFrame})` }}>
                <div className="d-flex flex-row justify-content-center mt-1 px-5">
                    <div className="avatar-light py-2 rounded-circle shadow bg-white" style={{ backgroundImage: `url("https://res.cloudinary.com/fyp202105/image/upload/v1622960251/Portfolio/Profile.jpg")` }}></div>
                </div>
                <div className="d-flex flex-row justify-content-center mt-3 px-5">
                    <p className='fw-bold fs-5'>See Yee Choong</p>
                </div>
                <RowButton title="View More" active onClick={() => setNext(true)} />
                <RowButton title="Resume" onClick={() => navigate("/resume")} />
                <RowButton title="Projects" onClick={() => navigate("/projects")} />
                <SocialMediaButton top firstBtn="facebook" secondBtn="github" />
                <SocialMediaButton firstBtn="instagram" secondBtn="linkedin" />
            </div>
        </>
    )
}


export default PhoneComponent