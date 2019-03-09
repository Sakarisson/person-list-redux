import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PersonListElement from './PersonListElement';

const PeopleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  width: 50%;
`;

const PersonList = ({ people, removePerson }) => (
  <PeopleContainer>
    {people.map(person => (
      <PersonListElement person={person} remove={() => removePerson(person.id)} key={person.id} />
    ))}
  </PeopleContainer>
);

PersonList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  removePerson: PropTypes.func.isRequired,
};

export default PersonList;
