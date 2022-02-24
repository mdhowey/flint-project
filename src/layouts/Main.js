import React from 'react'
import CardGrid from '../components/CardGrid';
import {
  MainContainer,
  RecommendationsContainer
} from '../styles/Main.style';

const Main = (props) => {
  return(
    <MainContainer>
      <h2>What do his coworkers say?</h2>
      <RecommendationsContainer>
        <CardGrid recommendations={props.recommendations}/>
      </RecommendationsContainer>
    </MainContainer>
  )
}

export default Main