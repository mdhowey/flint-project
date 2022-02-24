import styled from "styled-components";
import '../assets/fonts/FontsFree-Net-Mont1.ttf'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // background-color: #143c3c;
  color: #143c3c;
  padding: 4rem 0;
  & h2 {
    font-family: "Mont-Regular", sans-serif;
    font-weight: 200;
    font-size: 4em;
  }
`;

export const RecommendationsContainer = styled.div`
  display: flex;
  background-color: #143c3c;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-direction: column;
  & h2 {
    font-family: "Mont-Regular", sans-serif;
    margin: 2em 0;
    font-weight: 200;
    font-size: 2em;
  }
  @media (min-width: 1100px) {
    flex-direction: row;
    margin: 0 0.5em;
  }
`;

export const ProjectsContainer = styled.div`
// background-color: #143c3c;
margin: auto;
display: grid;
grid-template-columns: 600px 600px;
grid-row: auto auto;
grid-column-gap: 20px;
grid-row-gap: 20px;
  & h3 {
    font-family: "Mont-Regular", sans-serif;
    margin: 1em 0;
    font-weight: 200;
    font-size: 2em;
  }
  @media (min-width: 700px) {
    grid-template-columns: 600px;
    grid-row-gap: 20px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 600px 600px;
    grid-row-gap: auto auto;
  }
`;