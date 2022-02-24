import styled from "styled-components";
import '../assets/fonts/FontsFree-Net-Mont1.ttf'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #143c3c;
  opacity: 0.9;
  color: #FFFFFF;
  padding: 4rem 0;
  & h2 {
    font-family: "Mont-Regular", sans-serif;
    font-weight: 200;
    font-size: 4em;
  }
`;

export const RecommendationsContainer = styled.div`
  display: flex;
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