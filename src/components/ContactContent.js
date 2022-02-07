import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  margin: 2.5rem 0;
`;

const Highlight = styled.span`
  font-weight: 700;
`;

export default function ContactContent() {
  return (
    <Text>All rights reserved © Equalizer 2021<br/>Have any problems? Contact us via social media or email us at<br/><Highlight>equalizer@example.com</Highlight></Text>
  );
}