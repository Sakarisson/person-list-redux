import sortPeople from './sortPeople';

describe('it can sort by name', () => {
  it('in ascending order', () => {
    const people = [
      {
        id: '2',
        firstName: 'person2',
      },
      {
        id: '3',
        firstName: 'person3',
      },
    ];
    expect(sortPeople(people, 'name', 'ascending')).toEqual([
      {
        id: '2',
        firstName: 'person2',
      },
      {
        id: '3',
        firstName: 'person3',
      },
    ]);
  });

  it('in descending order', () => {
    const people = [
      {
        id: '2',
        firstName: 'person2',
      },
      {
        id: '3',
        firstName: 'person3',
      },
    ];
    expect(sortPeople(people, 'name', 'descending')).toEqual([
      {
        id: '3',
        firstName: 'person3',
      },
      {
        id: '2',
        firstName: 'person2',
      },
    ]);
  });
});
describe('it can sort by city', () => {
  it('in ascending order', () => {
    const people = [
      {
        id: '2',
        firstName: 'person2',
        address: {
          city: 'city2',
        },
      },
      {
        id: '3',
        firstName: 'person3',
        address: {
          city: 'city3',
        },
      },
    ];
    expect(sortPeople(people, 'city', 'ascending')).toEqual([
      {
        id: '2',
        firstName: 'person2',
        address: {
          city: 'city2',
        },
      },
      {
        id: '3',
        firstName: 'person3',
        address: {
          city: 'city3',
        },
      },
    ]);
  });

  it('in descending order', () => {
    const people = [
      {
        id: '2',
        firstName: 'person2',
        address: {
          city: 'city2',
        },
      },
      {
        id: '3',
        firstName: 'person3',
        address: {
          city: 'city3',
        },
      },
    ];
    expect(sortPeople(people, 'city', 'descending')).toEqual([
      {
        id: '3',
        firstName: 'person3',
        address: {
          city: 'city3',
        },
      },
      {
        id: '2',
        firstName: 'person2',
        address: {
          city: 'city2',
        },
      },
    ]);
  });
});
