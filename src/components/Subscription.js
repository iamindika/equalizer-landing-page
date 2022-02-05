import React from 'react';
import styled from 'styled-components';

const SubscriptionInfo = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .5rem 0;
  padding-right: 12rem;
`;

const Fee = styled.span`
  font-weight: 700;
  font-size: 6.5rem;
`;

const Period = styled.span`
  margin: 0 auto;
  font-size: 2rem;
`


export default function Subscription() {
  return (
    <SubscriptionInfo>
      <Fee>$4</Fee>
      <Period>/ month</Period>
    </SubscriptionInfo>
  )
}