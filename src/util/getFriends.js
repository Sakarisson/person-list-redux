const getFriends = (state, id) =>
  state.personList.people
    .find(p => p.id === id)
    .friends.map(f => state.personList.people.find(p => p.id === f));

export default getFriends;
