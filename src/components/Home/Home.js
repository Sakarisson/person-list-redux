import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PersonList from '../PersonList';
import AddPeople from './AddPeople';

const Home = ({ personList }) => (
  <div>
    <AddPeople personList={personList} />
    {!!personList.people.length && (
      <Fragment>
        <p>People:</p>
        <PersonList personList={personList} />
      </Fragment>
    )}
  </div>
);

Home.propTypes = {
  personList: {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
  }.isRequired,
};

export default connect(store => {
  console.log(store.personList);
  return {
    personList: store.personList,
  };
})(Home);
