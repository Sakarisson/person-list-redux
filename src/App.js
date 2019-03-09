import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers';
import Routes from './components/Routes';
import Header from './components/Header';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 60em 1fr;
  grid-template-areas:
    '. header .'
    '. container .';
  padding-top: 5em;
`;

const InnerContainer = styled.div`
  grid-area: container;
`;

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <Container>
        <Header />
        <InnerContainer>
          <Routes />
        </InnerContainer>
      </Container>
    </Router>
  </Provider>
);

export default App;
