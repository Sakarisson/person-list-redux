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

  it('should handle REMOVE_PERSON', () => {
    const people = [
      {
        id: '1',
        firstName: 'Foo',
        lastName: 'Bar',
        address: { streetAddress: 'Homeplace 5', city: 'Helsinki', zipCode: '12321' },
        friendsSortBy: 'none',
        friendsSortOrder: 'ascending',
        friends: ['2'],
      },
      {
        id: '2',
        firstName: 'Bar',
        lastName: 'Foo',
        address: { streetAddress: 'Somewhere 3', city: 'Porvoo', zipCode: '32323' },
        friendsSortBy: 'name',
        friendsSortOrder: 'descending',
        friends: ['1'],
      },
    ];
    expect(personList({ people }, personListActions.removePerson('1'))).toEqual({
      people: [
        {
          id: '2',
          firstName: 'Bar',
          lastName: 'Foo',
          address: { streetAddress: 'Somewhere 3', city: 'Porvoo', zipCode: '32323' },
          friendsSortBy: 'name',
          friendsSortOrder: 'descending',
          friends: ['1'],
        },
      ],
    });
  });
});
