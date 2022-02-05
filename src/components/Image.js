import React from 'react';
import styled from 'styled-components';
import mobileAppImg from '../assets/images/illustration-app.png';

const StyledImage = styled.img`
  display: block;
  position: relative;
  top: -9.8rem;
  max-width: 55%;
  margin: 0 auto;
`;

export default function Image() {
  return (
    <StyledImage 
      src={mobileAppImg}
      alt='mobile app demo'
    />
  )
}