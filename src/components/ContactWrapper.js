import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ContactContent from './ContactContent';
import CallToAction from './CallToAction';

const Wrapper = styled.footer`
  padding: 0 2.4rem;
`;

export default function ContactWrapper() {
  return (
    <Wrapper>
      <Logo />
      <ContactContent />
      <CallToAction />
    </Wrapper>
  );
}