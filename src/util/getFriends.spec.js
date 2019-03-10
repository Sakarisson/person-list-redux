import getFriends from './getFriends';

describe('getFriends', () => {
  it('maps references to instances', () => {
    const state = {
      personList: {
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
      },
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
      personList: {
        people: [
          { id: '1', firstName: 'person1', friends: [] },
          { id: '2', firstName: 'person2', friends: ['3'] },
          { id: '3', firstName: 'person3', friends: ['2'] },
        ],
      },
    };
    expect(getFriends(state, '1')).toEqual([]);
  });

  describe('it can sort by name', () => {
    it('in ascending order', () => {
      const state = {
        personList: {
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
        },
      };
      expect(getFriends(state, '1', 'name', 'ascending')).toEqual([
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

    it('in descending order', () => {
      const state = {
        personList: {
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
        },
      };
      expect(getFriends(state, '1', 'name', 'descending')).toEqual([
        {
          id: '3',
          firstName: 'person3',
          friends: ['1', '2'],
        },
        {
          id: '2',
          firstName: 'person2',
          friends: ['1', '3'],
        },
      ]);
    });
  });
  describe('it can sort by city', () => {
    it('in ascending order', () => {
      const state = {
        personList: {
          people: [
            {
              id: '1',
              firstName: 'person1',
              address: {
                city: 'city1',
              },
              friends: ['2', '3'],
            },
            {
              id: '2',
              firstName: 'person2',
              address: {
                city: 'city2',
              },
              friends: ['1', '3'],
            },
            {
              id: '3',
              firstName: 'person3',
              address: {
                city: 'city3',
              },
              friends: ['1', '2'],
            },
          ],
        },
      };
      expect(getFriends(state, '1', 'city', 'ascending')).toEqual([
        {
          id: '2',
          firstName: 'person2',
          address: {
            city: 'city2',
          },
          friends: ['1', '3'],
        },
        {
          id: '3',
          firstName: 'person3',
          address: {
            city: 'city3',
          },
          friends: ['1', '2'],
        },
      ]);
    });

    it('in descending order', () => {
      const state = {
        personList: {
          people: [
            {
              id: '1',
              firstName: 'person1',
              address: {
                city: 'city1',
              },
              friends: ['2', '3'],
            },
            {
              id: '2',
              firstName: 'person2',
              address: {
                city: 'city2',
              },
              friends: ['1', '3'],
            },
            {
              id: '3',
              firstName: 'person3',
              address: {
                city: 'city3',
              },
              friends: ['1', '2'],
            },
          ],
        },
      };
      expect(getFriends(state, '1', 'city', 'descending')).toEqual([
        {
          id: '3',
          firstName: 'person3',
          address: {
            city: 'city3',
          },
          friends: ['1', '2'],
        },
        {
          id: '2',
          firstName: 'person2',
          address: {
            city: 'city2',
          },
          friends: ['1', '3'],
        },
      ]);
    });
  });
});
