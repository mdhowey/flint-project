import styled from "styled-components";
import { Button } from "./ButtonMain.style";
import '../assets/fonts/FontsFree-Net-Mont1.ttf'

export const FooterContainer = styled.div`
  display: flex;
  background-color: #FFFFFF;
  width: 100%;
  min-height: 10vh;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const FooterLeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; 
  font-family: "Mont-Regular", sans-serif;
  height: 45%;
`;

export const FooterPhrase = styled.p`
  font-size: 3em;
  margin: 2em;
`;

export const FooterButton = styled(Button)`
  font-size: 1.5em;
`;

export const FooterRight = styled.img`
  width: 50%;
`;

export const FooterLeftBottom = styled.div`
  font-family: "Mont-Regular", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #C84C54;
  color: #FFFFFF;
`;

export const FooterLeftBottomText = styled.p`
  width: 100%;
  text-align: center;
`;

export const FooterRightBottom = styled.div`
  font-family: "Mont-Regular", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #C52326;
  color: #FFFFFF;
`;

export const FooterRightBottomText = styled.p`
  margin-left: 4%;  
  // width: 100%;
  font-weight: bold;
`;

export const Logo = styled.img`
  margin-right: 3%;
  // max-width: 60px;
  height: 30px;
`;