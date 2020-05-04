import React from 'react';
import styled from 'styled-components';

const LoaderStyle = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #051c33;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
`;

const Loader = () => <LoaderStyle />;
export default Loader;
