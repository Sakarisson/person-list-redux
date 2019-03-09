import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const addPeople = count => {
  for (let i = 0; i < count; i += 1) {
    console.log(i);
  }
};

const Container = styled.div`
  margin-bottom: 2em;
`;

const AddPeople = () => {
  const [peopleCount, setPeopleCount] = useState(0);

  return (
    <Container>
      <button type="button" onClick={() => addPeople(peopleCount)}>
        Add multiple people
      </button>
      <input type="number" value={peopleCount} onChange={e => setPeopleCount(e.target.value)} />
    </Container>
  );
};

AddPeople.propTypes = {
  store: PropTypes.shape({
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default AddPeople;
