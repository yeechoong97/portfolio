import React from 'react'
import IconReference from './IconReference'
import Checklist from '../components/Checklist';

const ProjectCard = ({ project }) => {

    return (
        <>
            <div className='card shadow border-0 mt-5' style={{ width: "25rem" }}>
                <img className='card-img-top' src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} />
                <div className='card-header border-top position-relative'>
                    <div className='fs-6 fw-bold lh-sm'>{project.title}</div>
                    <div className='fs-7 text-muted '>{project.type} <span className="badge bg-primary rounded-pill ms-1 fw-normal">{project.course}</span><span className="badge bg-success rounded-pill ms-1">{project.year}</span></div>
                </div>
                <div className='card-body'>
                    <div className='card-title fw-bold'>Summary</div>
                    <div className='card-text fs-summary'>{project.summary}</div>
                    <Checklist objectives={project.objectives} />
                    <div className='d-flex flex-row justify-content-evenly flex-wrap p-1 mt-3'>
                        {project.lang.map(element =>
                            <IconReference IconName={element} key={element} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard