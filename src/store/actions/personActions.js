import * as personActionTypes from '../actionTypes/personActionTypes';

export const addFriend = id => ({
  type: personActionTypes.ADD_FRIEND,
  id,
});

export const setSortBy = sortBy => ({
  type: personActionTypes.SET_SORT_BY,
  sortBy,
});

export const setSortOrder = sortOrder => ({
  type: personActionTypes.SET_SORT_ORDER,
  sortOrder,
});
