import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Helmet } from 'react-helmet';

const Title = styled.h2`
  font-size: 2em;
  margin: 52px 0 40px;
  text-transform: capitalize;
  color: #051c33;
`;

const Search = ({ searchTerm }) => {
  // console.log(searchTerm);
  return (
    <>
      <Helmet>
        <title>
          {searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)} Images
        </title>
      </Helmet>
      <Title>{searchTerm} Images</Title>
      <Container searchTerm={searchTerm} />
    </>
  );
};

export default Search;
