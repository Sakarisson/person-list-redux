const getFriends = (people, id) =>
  people.find(p => p.id === id).friends.map(f => people.find(p => p.id === f));

export default getFriends;
