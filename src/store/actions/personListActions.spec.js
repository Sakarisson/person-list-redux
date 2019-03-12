import * as actions from './personListActions';

describe('personList actions', () => {
  it('addPerson should create ADD_PERSON action', () => {
    const person = {
      id: '1',
      firstName: 'Foo',
      lastName: 'Bar',
      address: { streetAddress: 'Homeplace 5', city: 'Helsinki', zipCode: '12321' },
      friendsSortBy: 'none',
      friendsSortOrder: 'ascending',
      friends: ['2'],
    };
    expect(actions.addPerson(person)).toEqual({ ...person, type: 'PersonList/ADD_PERSON' });
  });

  it('removePerson should create REMOVE_PERSON action', () => {
    expect(actions.removePerson('1')).toEqual({ id: '1', type: 'PersonList/REMOVE_PERSON' });
  });

  it('addFriend creates addFriend action', () => {
    expect(actions.addFriend('1', '2')).toEqual({
      type: 'PersonList/ADD_FRIEND',
      personId: '1',
      friendId: '2',
    });
  });

  it('setPersonSortBy creates setPersonSortBy action', () => {
    expect(actions.setPersonSortBy('1', 'name')).toEqual({
      type: 'PersonList/SET_SORT_BY',
      personId: '1',
      sortBy: 'name',
    });
  });

  it('setPersonSortOrder creates setPersonSortOrder action', () => {
    expect(actions.setPersonSortOrder('1', 'descending')).toEqual({
      type: 'PersonList/SET_SORT_ORDER',
      personId: '1',
      sortOrder: 'descending',
    });
  });

  it('clearAllFriends creates clearAllFriends action', () => {
    expect(actions.clearAllFriends()).toEqual({
      type: 'PersonList/CLEAR_ALL_FRIENDS',
    });
  });

  it('setSortBy creates setSortBy action', () => {
    expect(actions.setSortBy('name')).toEqual({
      type: 'PersonList/SET_SORT_BY',
      sortBy: 'name',
    });
  });

  it('setSortOrder creates setSortOrder action', () => {
    expect(actions.setSortOrder('descending')).toEqual({
      type: 'PersonList/SET_SORT_ORDER',
      sortOrder: 'descending',
    });
  });
});
