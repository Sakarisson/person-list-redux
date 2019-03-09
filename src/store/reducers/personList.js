import * as personListActionTypes from '../actionTypes/personListActionTypes';

const baseState = {
  people: [],
};

export default (state = baseState, action) => {
  switch (action.type) {
    case personListActionTypes.ADD_PERSON:
      return {
        ...state,
        people: [
          ...state.people,
          {
            id: action.id,
            firstName: action.firstName,
            lastName: action.lastName,
            address: action.address,
            friendsSortBy: action.friendsSortBy,
            friendsSortOrder: action.friendsSortOrder,
            friends: action.friends,
          },
        ],
      };

    case personListActionTypes.REMOVE_PERSON:
      return {
        ...state,
        people: state.people.filter(person => person.id !== action.id),
      };
    default:
      return state;
  }
};
