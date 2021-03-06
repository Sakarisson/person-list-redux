import * as personListActionTypes from '../../actionTypes/personListActionTypes';
import addFriend from './addFriend';
import removePerson from './removePerson';

const baseState = {
  sortBy: 'none',
  sortOrder: 'ascending',
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
      return removePerson(state, action);

    case personListActionTypes.ADD_FRIEND:
      return addFriend(state, action);

    case personListActionTypes.SET_PERSON_SORT_BY:
      return {
        ...state,
        people: state.people.map(p =>
          p.id === action.personId ? { ...p, friendsSortBy: action.sortBy } : p,
        ),
      };

    case personListActionTypes.SET_PERSON_SORT_ORDER:
      return {
        ...state,
        people: state.people.map(p =>
          p.id === action.personId ? { ...p, friendsSortOrder: action.sortOrder } : p,
        ),
      };

    case personListActionTypes.CLEAR_ALL_FRIENDS:
      return {
        ...state,
        people: state.people.map(p => ({ ...p, friends: [] })),
      };

    case personListActionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy,
      };

    case personListActionTypes.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.sortOrder,
      };

    default:
      return state;
  }
};
