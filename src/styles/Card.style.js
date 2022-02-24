import styled from "styled-components";
import '../assets/fonts/FontsFree-Net-Mont1.ttf'

export const CardOuter = styled.div`
  font-family: "Mont-Regular", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 4% 5%;
  & h2 {
    color: #FFFFFF;
    font-size: 2em;
    text-align: center;
  }
`;

export const CardInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    color: #FFFFFF;
    margin: 0 5px 20px 5px;
    &.author {
      font-weight: bold;
    }
    &.position {
      font-style: italic;
    }
  }
`;