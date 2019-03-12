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

const sortPeople = (people, sortBy = 'none', sortOrder = 'ascending') =>
  people.sort(getComparisonFunction(sortBy, sortOrder));

export default sortPeople;
