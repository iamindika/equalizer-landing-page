import React from 'react';
import styled from 'styled-components';
import Subscription from './Subscription';

const Wrapper = styled.section`
  position: relative;
  top: -5.5rem;
  border-radius: 1rem;
  padding: 4.8rem 3.65rem;
  background-color: hsl(12, 94%, 65%);
  color: hsl(20, 33%, 98%);
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 3.2rem;
`;

const Text = styled.p`
  margin-top: 1.2rem;
  font-size: 1.8rem;
`;

export default function MainContent() {
  return (
    <Wrapper>
      <Title>Premium EQ</Title>
      <Text>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</Text>
      <Subscription />
    </Wrapper>
  )
}