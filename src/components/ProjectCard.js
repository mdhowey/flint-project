import React from 'react'
import { Button } from '../styles/ButtonMain.style'
import { ProjectCardInner, ProjectCardOuter } from '../styles/ProjectCard.style'


const ProjectCard = (props) => {
  return (
    <ProjectCardOuter>
      <h3>{props.title}</h3>
      <ProjectCardInner>
        <p className='dates'>{props.dates}</p>
        <p className='description'>{props.description}</p>
        <p className='technologies'>{props.technologies}</p>
      </ProjectCardInner>
      <Button>Check it out →</Button>
    </ProjectCardOuter>
  )
}

export default ProjectCard

// title: 'EcomByJake',
//     dates: '10/22 - Present',
//     description: 'Lead team of 3 writers; I edit and approve final content, conduct trainings, and measure progress and success with milestones of 50 articles',
//     technologies: