import * as personActions from './personActions';

describe('addFriend', () => {
  it('creates addFriend action', () => {
    expect(personActions.addFriend('1', '2')).toEqual({
      type: 'Person/ADD_FRIEND',
      personId: '1',
      friendId: '2',
    });
  });
});

describe('setSortBy', () => {
  it('creates setSortBy action', () => {
    expect(personActions.setSortBy('1', 'name')).toEqual({
      type: 'Person/SET_SORT_BY',
      personId: '1',
      sortBy: 'name',
    });
  });
});

describe('setSortOrder', () => {
  it('creates setSortOrder action', () => {
    expect(personActions.setSortOrder('1', 'descending')).toEqual({
      type: 'Person/SET_SORT_ORDER',
      personId: '1',
      sortOrder: 'descending',
    });
  });
});
