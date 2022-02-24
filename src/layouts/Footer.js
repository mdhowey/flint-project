import React from 'react'
import FooterLeftImage from '../assets/images/footer_einstein.png';
import { Button } from '../styles/ButtonMain.style';
import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterLeftBottom,
  FooterRightBottom,
  FooterLeftSection,
  FooterPhrase,
  FooterButton,
  FooterLeftBottomText,
  FooterRightBottomText
} from '../styles/Footer.style'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLeft>
          <FooterLeftSection>
            <FooterPhrase>I'm ready to start moving the needle for the brands you love!</FooterPhrase>
          </FooterLeftSection>
          <FooterLeftSection>
            <FooterButton primary>Get in touch →</FooterButton>
          </FooterLeftSection>
        </FooterLeft>
        <FooterRight src={FooterLeftImage} alt='Footer Image' />
      </FooterContainer>
      <FooterContainer>
        <FooterLeftBottom>
          <FooterLeftBottomText>
            © 2022 Michael Howey | devhowey
          </FooterLeftBottomText>
        </FooterLeftBottom>
        <FooterRightBottom>
          <FooterRightBottomText>
            Perham, MN → Mexico City, MX → Flint Group
          </FooterRightBottomText>
        </FooterRightBottom>
      </FooterContainer>
    </>
  )
}

export default Footer