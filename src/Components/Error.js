import React from 'react';
import styled from 'styled-components';

const ErrorBox = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: red;
  padding: 5px;
`;

const Error = ({ error }) => (
  <ErrorBox>
    <ErrorMessage>{error}</ErrorMessage>
  </ErrorBox>
);

export default Error;
