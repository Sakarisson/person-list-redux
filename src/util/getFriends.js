const sortByLenses = {
  none: () => false,
  name: ({ firstName, lastName }) => `${firstName} ${lastName}`,
  city: ({ address: { city } }) => city,
};

const comparisonOperators = {
  ascending: lens => (a, b) => lens(a) > lens(b),
  descending: lens => (a, b) => lens(a) < lens(b),
};

const getComparisonFunction = (sortBy, sortOrder) =>
  comparisonOperators[sortOrder](sortByLenses[sortBy]);

const getFriends = (state, id, sortBy = 'none', sortOrder = 'ascending') =>
  state.personList.people
    .find(p => p.id === id)
    .friends.map(f => state.personList.people.find(p => p.id === f))
    .sort(getComparisonFunction(sortBy, sortOrder));

export default getFriends;
