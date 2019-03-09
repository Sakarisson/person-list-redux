import * as personActions from './personActions';

describe('addFriend', () => {
  it('creates addFriend action', () => {
    expect(personActions.addFriend('1')).toEqual({ type: 'Person/ADD_FRIEND', id: '1' });
  });
});

describe('setSortBy', () => {
  it('creates setSortBy action', () => {
    expect(personActions.setSortBy('name')).toEqual({
      type: 'Person/SET_SORT_BY',
      sortBy: 'name',
    });
  });
});

describe('setSortOrder', () => {
  it('creates setSortOrder action', () => {
    expect(personActions.setSortOrder('descending')).toEqual({
      type: 'Person/SET_SORT_ORDER',
      sortOrder: 'descending',
    });
  });
});
