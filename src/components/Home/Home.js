import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PersonList from '../PersonList';
import AddPeople from './AddPeople';
import { addPerson, removePerson } from '../../store/actions/personListActions';

const Home = ({ personList, addPerson, removePerson }) => (
  <div>
    <AddPeople addPerson={addPerson} />
    {!!personList.people.length && (
      <Fragment>
        <p>People:</p>
        <PersonList people={personList.people} removePerson={removePerson} />
      </Fragment>
    )}
  </div>
);

Home.propTypes = {
  personList: PropTypes.shape({
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default connect(
  store => ({
    personList: store.personList,
  }),
  dispatch => ({
    addPerson: person => dispatch(addPerson(person)),
    removePerson: id => dispatch(removePerson(id)),
  }),
)(Home);
