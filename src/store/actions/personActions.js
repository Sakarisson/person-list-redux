import * as personActionTypes from '../actionTypes/personActionTypes';

export const addFriend = (personId, friendId) => ({
  type: personActionTypes.ADD_FRIEND,
  personId,
  friendId,
});

export const setSortBy = (personId, sortBy) => ({
  type: personActionTypes.SET_SORT_BY,
  personId,
  sortBy,
});

export const setSortOrder = (personId, sortOrder) => ({
  type: personActionTypes.SET_SORT_ORDER,
  personId,
  sortOrder,
});
