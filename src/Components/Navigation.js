import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: auto;
  }
  .active {
    background-color: #051c33;
  }
`;

const List = styled.li`
  width: 100%;
  margin-bottom: 1em;
  a {
    display: block;
    background: #051c33;
    border-radius: 3px;
    padding: 5px;
    color: #fff;
    &:hover {
      background-color: #051c33;
    }
  }
`;

const Navigation = () => (
  <MainNav className="main-nav">
    <ul>
      <List>
        <NavLink to="/mountain">Mountain</NavLink>
      </List>
      <List>
        <NavLink to="/beach">Beach</NavLink>
      </List>
      <List>
        <NavLink to="/bird">Bird</NavLink>
      </List>
      <List>
        <NavLink to="/food">Food</NavLink>
      </List>
    </ul>
  </MainNav>
);

export default Navigation;
