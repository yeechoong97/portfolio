import { useState, FunctionComponent } from 'react'
import BackgroundEffect from '../components/BackgroundEffect';
import ChatComponent from '../components/ChatComponent';
import PhoneComponent from '../components/PhoneComponent';
import '../css/about.css';

const About: FunctionComponent = () => {

    const [next, setNext] = useState<boolean>(false);

    return (
        <div>
            <div className="backgroundImg-light">
                <BackgroundEffect />
                <div className="container py-5 d-flex flex-column justify-content-center align-items-center h-100">
                    {next ? (<ChatComponent setNext={setNext} />) : (<PhoneComponent setNext={setNext} />)}
                </div>
            </div>
        </div >
    )
}

export default About