import * as personListActionTypes from '../actionTypes/personListActionTypes';

export const addPerson = person => ({
  type: personListActionTypes.ADD_PERSON,
  person,
});

export const removePerson = id => ({
  type: personListActionTypes.REMOVE_PERSON,
  id,
});
