import React from 'react'
import { skills } from '../data'
import IconReference from './IconReference'

const SkillsComponent = () => {
    return (
        <>
            {
                skills.map((item, index) =>
                    <div className={`bg-white rounded-2 p-3 w-100 shadow-sm ${index === 0 ? "" : "mt-3"}`} key={item.type}>
                        <div className='d-flex flex-column justify-content-center px-2 py-1'>
                            <strong className="fs-5 text-primary"><i className="fa-solid fa-chevron-left"></i>{` ${item.type} /`}<i className="fa-solid fa-chevron-right"></i></strong>
                            {
                                item.languages.map(lang =>
                                    <div className='d-flex flex-row justify-contents-start align-items-center p-1' key={lang}>
                                        <IconReference IconName={lang} />
                                        <div className='ps-3 pt-1'>{lang}</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SkillsComponent