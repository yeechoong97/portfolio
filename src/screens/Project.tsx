import { FunctionComponent } from 'react';
import BackgroundEffect from '../components/BackgroundEffect';
import '../css/project.css';
import { projects } from "../data";
import ProjectCard from '../components/ProjectCard';



const Project: FunctionComponent = () => {
    return (
        <div className="backgroundImg-light">
            <BackgroundEffect />
            <div className="d-flex flex-row align-items-center justify-content-evenly h-100 w-100 container flex-wrap gap-5 p-5 overflow-auto">
                {projects.map(project =>
                    <ProjectCard project={project} key={project.title} />
                )}
            </div>
        </div>
    );
}



export default Project;

