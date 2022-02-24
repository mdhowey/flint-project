import styled from "styled-components";
import '../assets/fonts/FontsFree-Net-Mont1.ttf'

export const Button = styled.button`
  font-family: "Mont-Regular", sans-serif;
  background: ${props => props.primary ? "#C52326" : "#FFFFFF"};
  color: ${props => props.primary ? "#FFFFFF" : "#C52326"};
  transition: all 0.4s ease;
  &:hover { 
    background: ${props => props.primary ? "#FFFFFF" : "#C52326"};
    color: ${props => props.primary ? "#C52326" : "#FFFFFF"};
  }

  font-size: 1em;
  margin: 1em;
  padding: 0.5em 2.5em;
  border: 1px solid #C52326;
  border-radius: 1px;
  cursor: pointer;
`;