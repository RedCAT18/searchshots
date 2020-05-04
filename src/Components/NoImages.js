import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2em;
  margin: 52px 0 40px;
  text-transform: capitalize;
  color: #051c33;
`;
const NoImages = () => (
  <>
    <Title>No Images Found</Title>
    <p>Please try a different search term</p>
  </>
);

export default NoImages;
