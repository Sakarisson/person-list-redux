import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sortPeople from '../../util/sortPeople';
import PersonListElement from './PersonListElement';

const PeopleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  width: 50%;
`;

const PersonList = ({ people, sortBy, sortOrder, removePerson }) => (
  <PeopleContainer>
    {sortPeople(people, sortBy, sortOrder).map(person => (
      <PersonListElement person={person} remove={() => removePerson(person.id)} key={person.id} />
    ))}
  </PeopleContainer>
);

PersonList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  removePerson: PropTypes.func.isRequired,
  sortBy: PropTypes.oneOf(['none', 'name', 'city']).isRequired,
  sortOrder: PropTypes.oneOf(['ascending', 'descending']).isRequired,
};

export default PersonList;
