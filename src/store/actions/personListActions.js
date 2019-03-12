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

export const addFriend = (personId, friendId) => ({
  type: personListActionTypes.ADD_FRIEND,
  personId,
  friendId,
});

export const setPersonSortBy = (personId, sortBy) => ({
  type: personListActionTypes.SET_PERSON_SORT_BY,
  personId,
  sortBy,
});

export const setPersonSortOrder = (personId, sortOrder) => ({
  type: personListActionTypes.SET_PERSON_SORT_ORDER,
  personId,
  sortOrder,
});

export const clearAllFriends = () => ({
  type: personListActionTypes.CLEAR_ALL_FRIENDS,
});

export const setSortBy = sortBy => ({
  type: personListActionTypes.SET_SORT_BY,
  sortBy,
});

export const setSortOrder = sortOrder => ({
  type: personListActionTypes.SET_SORT_ORDER,
  sortOrder,
});
