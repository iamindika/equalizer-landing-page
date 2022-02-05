import React from 'react';
import styled from 'styled-components';
import bgImage from '../assets/images/bg-pattern-2.svg';

const Header = styled.header`
  border-radius: 1.6rem;
  background-image: url(${bgImage});
  background-color: hsl(244, 23%, 12%);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 27rem 41rem;
`;

export default function MainHeader({ children }) {
  return (
    <Header>{children}</Header>
  )
}