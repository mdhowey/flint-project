import styled from "styled-components";
import '../assets/fonts/FontsFree-Net-Mont1.ttf'

export const ProjectCardOuter = styled.div`
  border: 5px #C52326 solid;
  border-radius: 10px;
  font-family: "Mont-Regular", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5%;
  padding: 10%;
  & h2 {
    color: #000000;
    font-size: 2em;
  }
`;

export const ProjectCardInner = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-direction: column;
  & p {
    color: #143c3c;
    margin: 0 5px 20px 5px;
    &.dates {
      font-weight: bold;
      letter-spacing: 2px;
    }
    &.description {
      letter-spacing: 1.5px;
    }
    &.technologies {
      font-style: italic;
    }
  }
`;