import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import Navigation from './Navigation';

const Title = styled.h1`
  font-size: 3.5em;
  color: #051c33;
  margin-top: 40px;
  margin-bottom: 20px;
  font-family: 'Knewave', cursive;
`;

const Header = ({ history, handleSubmit }) => {
  return (
    <>
      <Title>Search Shots</Title>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </>
  );
};

export default Header;
