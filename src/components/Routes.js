import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PersonPage from './PersonPage';
import Home from './Home';

const Routes = ({ people }) => [
  <Route exact path="/" component={Home} key="home" />,
  ...people.map(person => (
    <Route
      exact
      path={`/people/${person.id}`}
      component={() => <PersonPage person={person} />}
      key={person.id}
    />
  )),
];

export default compose(
  withRouter,
  connect(state => ({
    people: state.personList.people,
  })),
)(Routes);
