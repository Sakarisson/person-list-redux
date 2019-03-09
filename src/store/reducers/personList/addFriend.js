const sortPeople = (a, b) => a.id > b.id;

const addFriend = (state, action) => {
  const { personId, friendId } = action;
  const person = state.people.find(p => p.id === personId);
  const friend = state.people.find(p => p.id === friendId);
  if (!friend || !person || person.friends.includes(friendId)) {
    return state;
  }
  const rest = state.people.filter(p => p.id !== personId);
  const newState = {
    ...state,
    people: [...rest, { ...person, friends: [...person.friends, friendId] }].sort(sortPeople),
  };
  if (!friend.friends.includes(personId)) {
    return addFriend(newState, { personId: friendId, friendId: personId });
  }
  return newState;
};

export default addFriend;
