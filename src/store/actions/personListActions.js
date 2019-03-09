import * as personListActionTypes from '../actionTypes/personListActionTypes';

export const addPerson = person => ({
  type: personListActionTypes.ADD_PERSON,
  id: person.id,
  firstName: person.firstName,
  lastName: person.lastName,
  address: person.address,
  friendsSortBy: person.friendsSortBy,
  friendsSortOrder: person.friendsSortOrder,
  friends: person.friends,
});

export const removePerson = id => ({
  type: personListActionTypes.REMOVE_PERSON,
  id,
});
