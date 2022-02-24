import projects from '../stores/projects';
import ProjectCard from './ProjectCard';

const ProjectGrid = (props) => {
  const projectGridCreator = props.projects.map((project, index) => {
    return (
      <ProjectCard
        title={project.title}
        dates={project.dates}
        description={project.description}
        technologies={project.technologies}
        key={index}
      />
    )
  });
  return projectGridCreator
}

export default ProjectGrid