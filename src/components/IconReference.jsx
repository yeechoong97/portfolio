import React from 'react'
import { iconPack } from '../data'

const IconReference = ({ IconName }) => {

    const SelectedIcon = iconPack.find(element => element.name === IconName);

    const IconType = {
        backgroundImage: `url(${process.env.PUBLIC_URL}${SelectedIcon.path})`,
        height: "35px",
        width: "35px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return (
        <>
            {
                SelectedIcon.link === "#" ?
                    (<a href={SelectedIcon.link} rel="noreferrer" style={IconType}></a>) :
                    <a href={SelectedIcon.link} target='_blank' rel="noreferrer" style={IconType}></a>
            }

        </>
    )
}

export default IconReference
