import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom';
import RowButton from './RowButton';
import SocialMediaButton from './SocialMediaButton';
import iphoneFrame from '../iphone.png';

type Props = {
    setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhoneComponent: FunctionComponent<Props> = ({ setNext }) => {

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