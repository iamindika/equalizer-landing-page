import React from 'react';
import styled, { css } from 'styled-components';
import appleIcon from '../assets/icons/icon-apple.svg';
import androidIcon from '../assets/icons/icon-android.svg';

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .8rem 0;
  border-radius: 1rem;
  padding: 1.45rem 0;
  font-weight: 700;
  font-size: 1.8rem;
  text-decoration: none;
  text-align: center;

  &.extra-margin {
    margin-top: 1.5rem;
  }
`;

const StyledButton = styled(Button)`
  ${({ icon }) => {
    switch(icon) {
      case 'apple':
        return css`
          background-color: hsl(244, 23%, 12%);
          color: hsl(20, 33%, 98%);

          &:hover {
            cursor: pointer;
            background-color: hsl(177, 68%, 64%);
          }
        `;
      default: 
        return css`
          background-color: hsl(20, 33%, 98%);
          color: hsl(244, 23%, 12%);

          &:hover {
            cursor: pointer;
            background-color: hsl(33, 100%, 70%);
          }
        `;
    }
  }}
`; 

const Text = styled.span`
  margin-left: .8rem;
`;

export default function Link(props) {
  return (
    <StyledButton {...props} href="#">
      <img 
      src={props.icon === 'apple' ? appleIcon : androidIcon} 
      alt={props.icon === 'apple' ? 'apple link' : 'android link'}/>
      <Text>
        {props.icon === 'apple' ? 'iOS Download' : 'Android Download'}
      </Text>
    </StyledButton>
  )
}