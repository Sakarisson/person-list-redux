import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PersonList from '../PersonList';
import AddPeople from './AddPeople';
import { addPerson } from '../../store/actions/personListActions';

const Home = ({ personList, addPerson }) => (
  <div>
    <AddPeople addPerson={addPerson} />
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

export default connect(store => ({
    personList: store.personList,
  }), dispatch => ({ addPerson: person => dispatch(addPerson(person)) }))(Home);
