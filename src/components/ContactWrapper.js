import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.footer`
  position: relative;
  padding: 0 2.4rem;
`;

export default function ContactWrapper() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}