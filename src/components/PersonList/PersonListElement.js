import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RemovePersonButton = styled.button``;

const PersonListElement = ({ person: { id, firstName, lastName }, remove }) => (
  <Fragment>
    <Link to={`/people/${id}`}>{`${firstName} ${lastName}`}</Link>
    <RemovePersonButton onClick={remove}>Remove</RemovePersonButton>
  </Fragment>
);

PersonListElement.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default PersonListElement;
