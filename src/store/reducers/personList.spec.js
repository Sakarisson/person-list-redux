import personList from './personList';
import * as personListActions from '../actions/personListActions';

describe('personList reducer', () => {
  it('should handle initial state', () => {
    expect(personList(undefined, {})).toEqual({ people: [] });
  });

  describe('ADD_PERSON', () => {
    it('should handle ADD_PERSON with full information', () => {
      const person = {
        id: '1',
        firstName: 'Foo',
        lastName: 'Bar',
        address: { streetAddress: 'Homeplace 5', city: 'Helsinki', zipCode: '12321' },
        friendsSortBy: 'none',
        friendsSortOrder: 'ascending',
        friends: ['2'],
      };
      expect(personList(undefined, personListActions.addPerson(person))).toEqual({
        people: [person],
      });
    });

    it('should handle ADD_PERSON with incomplete information', () => {
      const person = {
        id: '1',
        firstName: 'Foo',
        lastName: 'Bar',
        address: { streetAddress: 'Homeplace 5', city: 'Helsinki', zipCode: '12321' },
      };
      expect(personList(undefined, personListActions.addPerson(person))).toEqual({
        people: [{ ...person, friendsSortBy: 'none', friendsSortOrder: 'ascending', friends: [] }],
      });
    });
  });

  describe('REMOVE_PERSON', () => {
    it('should handle REMOVE_PERSON', () => {
      const people = [
        {
          id: '1',
          friends: [],
        },
        {
          id: '2',
          friends: [],
        },
      ];
      expect(personList({ people }, personListActions.removePerson('1'))).toEqual({
        people: [
          {
            id: '2',
            friends: [],
          },
        ],
      });
    });

    it('should remove that person from other lists of friends', () => {
      const people = [
        {
          id: '1',
          friends: ['2', '3'],
        },
        {
          id: '2',
          friends: ['1', '4'],
        },
        {
          id: '3',
          friends: ['1'],
        },
        {
          id: '4',
          friends: ['2'],
        },
      ];
      expect(personList({ people }, personListActions.removePerson('1'))).toEqual({
        people: [
          {
            id: '2',
            friends: ['4'],
          },
          {
            id: '3',
            friends: [],
          },
          {
            id: '4',
            friends: ['2'],
          },
        ],
      });
    });
  });

  it('should handle ADD_FRIEND', () => {
    const state = {
      people: [
        {
          id: '1',
          friends: ['2'],
        },
        {
          id: '2',
          friends: ['1'],
        },
        {
          id: '3',
          friends: [],
        },
      ],
    };
    expect(personList(state, personListActions.addFriend('1', '3'))).toEqual({
      people: [
        {
          id: '1',
          friends: ['2', '3'],
        },
        {
          id: '2',
          friends: ['1'],
        },
        {
          id: '3',
          friends: ['1'],
        },
      ],
    });
  });

  it('should handle SET_SORT_BY', () => {
    const state = { people: [{ id: '1', sortBy: 'none' }, { id: '2', sortBy: 'none' }] };
    const expected = { people: [{ id: '1', sortBy: 'name' }, { id: '2', sortBy: 'none' }] };
    expect(personList(state, personListActions.setSortBy('1', 'name'))).toEqual(expected);
  });

  it('should handle SET_SORT_ORDER', () => {
    const state = {
      people: [{ id: '1', sortOrder: 'ascending' }, { id: '2', sortOrder: 'ascending' }],
    };
    const expected = {
      people: [{ id: '1', sortOrder: 'descending' }, { id: '2', sortOrder: 'ascending' }],
    };
    expect(personList(state, personListActions.setSortOrder('1', 'descending'))).toEqual(expected);
  });

  it('should handle CLEAR_ALL_FRIENDS', () => {
    const state = {
      people: [
        { id: '1', friends: ['2', '3'] },
        { id: '2', friends: ['1'] },
        { id: '3', friends: ['1', '4'] },
        { id: '4', friends: ['3'] },
      ],
    };
    const expected = {
      people: [
        { id: '1', friends: [] },
        { id: '2', friends: [] },
        { id: '3', friends: [] },
        { id: '4', friends: [] },
      ],
    };
    expect(personList(state, personListActions.clearAllFriends())).toEqual(expected);
  });
});
