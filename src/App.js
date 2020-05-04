import React from 'react';
import styled from 'styled-components';
import PhotoContextProvider from './Context/PhotoContext';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import Item from './Components/Item';
import Search from './Components/Search';
import NotFound from './Components/NotFound';

const Container = styled.div`
  width: 90vw;
  margin: auto;
  @media only screen and (max-width: 767px) {
    max-width: 960px;
    margin: auto;
  }
`;

const App = (props) => {
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();

    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <PhotoContextProvider>
      <HashRouter basename="/SnapScout">
        <Container>
          <Route
            render={(props) => (
              <Header handleSubmit={handleSubmit} history={props.history} />
            )}
          />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountain" />} />
            <Route
              path="/mountain"
              render={() => <Item searchTerm="mountain" />}
            />
            <Route path="/beach" render={() => <Item searchTerm="beach" />} />
            <Route path="/bird" render={() => <Item searchTerm="bird" />} />
            <Route path="/food" render={() => <Item searchTerm="food" />} />
            <Route
              path="/search/:searchInput"
              render={(props) => (
                <Search searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </HashRouter>
    </PhotoContextProvider>
  );
};

export default App;
