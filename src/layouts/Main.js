import React from 'react'
import CardGrid from '../components/CardGrid';
import ProjectGrid from '../components/ProjectGrid';
import {
  MainContainer,
  ProjectsContainer,
  RecommendationsContainer
} from '../styles/Main.style';

import projects from '../stores/projects'
import { Button } from '../styles/ButtonMain.style';

const Main = (props) => {
  return(
    <MainContainer>
      <h2>What do his coworkers say?</h2>
      <RecommendationsContainer>
        <CardGrid recommendations={props.recommendations}/>
      </RecommendationsContainer>
      <h2>Projects</h2>
      <ProjectsContainer>
        <ProjectGrid projects={projects}/>
      </ProjectsContainer>
      <h2>Any questions so far?</h2>
      <Button style={{fontSize: '2em'}}>Ask away!</Button>
    </MainContainer>
  )
}

export default Main