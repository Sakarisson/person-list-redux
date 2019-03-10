const getFriends = (state, id) =>
  state.people.find(p => p.id === id).friends.map(f => state.people.find(p => p.id === f));

export default getFriends;
