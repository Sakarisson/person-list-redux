import getFriends from './getFriends';

describe('getFriends', () => {
  it('maps references to instances', () => {
    const state = {
      people: [
        {
          id: '1',
          firstName: 'person1',
          friends: ['2', '3'],
        },
        {
          id: '2',
          firstName: 'person2',
          friends: ['1', '3'],
        },
        {
          id: '3',
          firstName: 'person3',
          friends: ['1', '2'],
        },
      ],
    };
    expect(getFriends(state, '1')).toEqual([
      {
        id: '2',
        firstName: 'person2',
        friends: ['1', '3'],
      },
      {
        id: '3',
        firstName: 'person3',
        friends: ['1', '2'],
      },
    ]);
  });

  it('returns empty array if no friends', () => {
    const state = {
      people: [
        { id: '1', firstName: 'person1', friends: [] },
        { id: '2', firstName: 'person2', friends: ['3'] },
        { id: '3', firstName: 'person3', friends: ['2'] },
      ],
    };
    expect(getFriends(state, '1')).toEqual([]);
  });
});
