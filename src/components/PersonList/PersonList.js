import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PersonListElement from './PersonListElement';

const PeopleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  width: 50%;
`;

const PersonList = ({ personList }) => (
  <PeopleContainer>
    {personList.people.map(person => (
      <PersonListElement
        person={person}
        remove={() => personList.removePerson(person.id)}
        key={person.id}
      />
    ))}
  </PeopleContainer>
);

PersonList.propTypes = {
  personList: PropTypes.shape({
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default PersonList;
