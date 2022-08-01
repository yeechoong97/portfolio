import { FunctionComponent } from 'react';
import '../css/about.css';
import { urlContents } from '../data.js';
import { SocialMediaButtonProps } from '../types';

const SocialMediaButton: FunctionComponent<SocialMediaButtonProps> = ({ top, firstBtn, secondBtn }) => {

    const firstButtonData = urlContents.find(element => element.name === firstBtn);
    const secondButtonData = urlContents.find(element => element.name === secondBtn);

    return (
        <>
            <div className={`${top ? "mt-3" : ""} d-flex flex-row h-25 justify-content-between px-4 mx-3 `}>
                <a className={`${firstButtonData!.background} h-75 my-2 rounded-3 shadow d-flex flex-column justify-content-center mx-1`} href={firstButtonData?.url} target="_blank" rel="noreferrer">
                    <span><i className={`fa ${firstButtonData?.icon} fs-1 text-white w-100 text-center`}></i></span>
                </a>
                <a className={`${secondButtonData?.background} h-75 my-2 rounded-3 shadow d-flex flex-column justify-content-center mx-1`} href={secondButtonData?.url} target="_blank" rel="noreferrer">
                    <span><i className={`fa ${secondButtonData?.icon} fs-1 text-white w-100 text-center`}></i></span>
                </a>
            </div>
        </>
    )
}
export default SocialMediaButton
