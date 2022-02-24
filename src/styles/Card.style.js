import styled from "styled-components";
import '../assets/fonts/FontsFree-Net-Mont1.ttf'

export const CardOuter = styled.div`
  font-family: "Mont-Regular", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  padding: 20px;
  & h2 {
    color: #C52326
  }
`;

export const CardInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 20px;
  & p {
    color: #143c3c;
  }
`;