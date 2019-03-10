const removePerson = (state, action) => ({
  ...state,
  people: state.people
    .filter(p => p.id !== action.id)
    .map(p => ({ ...p, friends: p.friends.filter(f => f !== action.id) })),
});

export default removePerson;
