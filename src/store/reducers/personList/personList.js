import * as personListActionTypes from '../../actionTypes/personListActionTypes';
import addFriend from './addFriend';

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
            friendsSortBy: action.friendsSortBy || 'none',
            friendsSortOrder: action.friendsSortOrder || 'ascending',
            friends: action.friends || [],
          },
        ],
      };

    case personListActionTypes.REMOVE_PERSON:
      return {
        ...state,
        people: state.people.filter(person => person.id !== action.id),
      };

    case personListActionTypes.ADD_FRIEND:
      return addFriend(state, action);

    case personListActionTypes.SET_SORT_BY:
      return {
        ...state,
        people: state.people.map(p =>
          p.id === action.personId ? { ...p, sortBy: action.sortBy } : p,
        ),
      };

    default:
      return state;
  }
};
