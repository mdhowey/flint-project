import React from 'react'
import FooterLeftImage from '../assets/images/footer_einstein.png';
import LogoImg from '../assets/images/footer_logo.png'
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
  FooterRightBottomText,
  Logo
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
          <Logo src={LogoImg} alt='Footer logo'></Logo>
        </FooterRightBottom>
      </FooterContainer>
    </>
  )
}

export default Footer