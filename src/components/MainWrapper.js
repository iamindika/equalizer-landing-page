import React from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import Image from './Image';

const Main = styled.main`
  margin-top: 16.6rem;
`;

export default function MainWrapper() {
  return (
    <Main>
      <MainHeader>
        <Image />
      </MainHeader>
      <MainContent />
    </Main>
  )
}