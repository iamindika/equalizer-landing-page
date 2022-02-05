import React from 'react';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import Image from './Image';

const Main = styled.main`
  margin: 16.6rem 0 6.4rem;
`;

export default function MainWrapper() {
  return (
    <Main>
      <MainHeader>
        <Image />
      </MainHeader>
    </Main>
  )
}