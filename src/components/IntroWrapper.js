import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import IntroContent from './IntroContent';
import bgImage from '../assets/images/bg-main-mobile.png';

const Header = styled.header`
  position: relative;
  padding: 2.5rem 2.4rem 0;
  background-image: url(${bgImage});
  background-position: left bottom;
  background-repeat: none;
`;

export default function IntroWrapper() {
  return (
    <Header>
      <Logo />
      <IntroContent />
    </Header>
  )
}