import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 6.4rem
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 4rem;
  line-height: normal;
`;

export default function IntroContent() {
  return (
    <Wrapper>
      <Title>We make your music sound extraordinary.</Title>
      <p>A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</p>
    </Wrapper>
  )
}