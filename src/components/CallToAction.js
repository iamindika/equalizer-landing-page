import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../assets/icons/icon-facebook.svg';
import instagramIcon from '../assets/icons/icon-instagram.svg';
import twitterIcon from '../assets/icons/icon-twitter.svg';

const Wrapper = styled.div`
  display: flex;
  margin: 6rem 0;
`;

const Icon = styled.a`
  &.margin-left {
    margin-left: 2rem;
  }
`;

export default function CallToAction() {
  return (
    <Wrapper>
      <Icon href="#">
        <img src={facebookIcon} alt="facebook link" />
      </Icon> 

      <Icon href="#" className="margin-left">
        <img src={instagramIcon} alt="instagram link" />
      </Icon> 

      <Icon href="#" className="margin-left">
        <img src={twitterIcon} alt="twitter" />
      </Icon> 
    </Wrapper>
  )
}