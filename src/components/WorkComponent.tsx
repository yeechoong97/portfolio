import { FunctionComponent } from 'react'
import { working } from '../data'

const WorkComponent: FunctionComponent = () => {
    return (
        <>
            {
                working.map((experience, index) =>
                    <div className={`bg-white rounded-2 p-3 w- shadow-sm ${index === 0 ? "" : "mt-3"}`} key={experience.title}>
                        <div className='d-flex flex-column justify-content-center px-2 py-1'>
                            <strong className="fs-5 text-primary">{experience.title}</strong>
                            <div className="text-secondary fs-7">{experience.duration}</div>
                            <div className="fw-bold fs-6 pt-2">{experience.company}</div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default WorkComponent