import * as personListActionTypes from '../actionTypes/personListActionTypes';

const baseState = {
  people: [],
};

export default (state = baseState, action) => {
  switch (action.types) {
    case personListActionTypes.ADD_PERSON:
      return {
        ...state,
        people: [
          ...state.people,
          {
            firstName: action.firstName,
            lastName: action.lastName,
            friendsSortBy: action.friendsSortBy,
            friendsSortOrder: action.friendsSortOrder,
            friends: action.friends,
          },
        ],
      };
    default:
      return state;
  }
};
