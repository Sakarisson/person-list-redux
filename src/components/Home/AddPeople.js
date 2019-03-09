import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import faker from 'faker';

import idGenerator from '../../util/idGenerator';

const addPeople = (count, addPerson) => {
  for (let i = 0; i < count; i += 1) {
    addPerson({
      id: idGenerator.id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: {
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
      },
    });
  }
};

const Container = styled.div`
  margin-bottom: 2em;
`;

const AddPeople = ({ addPerson }) => {
  const [peopleCount, setPeopleCount] = useState(0);

  return (
    <Container>
      <button type="button" onClick={() => addPeople(peopleCount, addPerson)}>
        Add multiple people
      </button>
      <input type="number" value={peopleCount} onChange={e => setPeopleCount(e.target.value)} />
    </Container>
  );
};

AddPeople.propTypes = {
  addPerson: PropTypes.func.isRequired,
};

export default AddPeople;
