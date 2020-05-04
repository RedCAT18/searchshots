import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2em;
  margin: 52px 0 40px;
  text-transform: capitalize;
  color: #051c33;
`;

const NotFound = () => (
  <Container>
    <Title>Page Not Found</Title>
  </Container>
);

export default NotFound;
