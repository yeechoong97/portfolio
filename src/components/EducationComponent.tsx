import { FunctionComponent } from 'react'
import { education } from '../data'

const EducationComponent: FunctionComponent = () => {
    return (
        <>
            {
                education.map((selectedUniversity, index) =>
                    <div className={`bg-white rounded-2 p-3 w-100 shadow-sm ${index === 0 ? "" : "mt-5"}`} key={selectedUniversity.university}>
                        <div className='d-flex flex-column justify-content-center px-2 py-1'>
                            <a href={selectedUniversity.hyperlink} className="fs-5 text-decoration-none fw-bold" target="_blank" rel="noreferrer">{selectedUniversity.university}</a>
                            <div className='d-flex flex-row pb-1'>
                                <div className="text-secondary fs-7">{selectedUniversity.year}</div>
                                <span className="top-0 end-0 badge rounded-pill bg-success ms-3">CGPA: {selectedUniversity.cgpa} </span>
                            </div>
                            <div className="fw-bold fs-6 pt-2">{selectedUniversity.course}</div>
                            <div className='fs-6 pt-4 d-flex flex-column justify-contents-start'>
                                <strong>Achievements: </strong>
                                {
                                    selectedUniversity.achievements.map(item =>
                                        <div className='d-flex flex-row justify-contents-start align-items-center' key={item.title}>
                                            <i className="fa-solid fa-star pe-2 text-warning"></i>
                                            <div className='pt-1'>{item.title}<small className='px-2 fs-8 text-muted'>{item.duration}</small></div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default EducationComponent