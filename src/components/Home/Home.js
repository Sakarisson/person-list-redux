import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';
import { min as _min, shuffle as _shuffle } from 'lodash';

import PersonList from '../PersonList';
import AddPeople from './AddPeople';
import {
  addPerson as addPersonAction,
  removePerson as removePersonAction,
  clearAllFriends as clearAllFriendsAction,
  addFriend as addFriendAction,
} from '../../store/actions/personListActions';

const Home = ({ personList, addPerson, removePerson, generateFriendships }) => (
  <div>
    <AddPeople addPerson={addPerson} />
    {personList.people.length > 1 && (
      <button type="button" onClick={() => generateFriendships(5)}>
        Generate friendships
      </button>
    )}
    {!!personList.people.length && (
      <Fragment>
        <p>People:</p>
        <PersonList people={personList.people} removePerson={removePerson} />
      </Fragment>
    )}
  </div>
);

Home.propTypes = {
  personList: PropTypes.shape({
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  addPerson: PropTypes.func.isRequired,
  removePerson: PropTypes.func.isRequired,
  generateFriendships: PropTypes.func.isRequired,
};

export default compose(
  connect(
    state => ({
      personList: state.personList,
    }),
    dispatch => ({
      addPerson: person => dispatch(addPersonAction(person)),
      removePerson: id => dispatch(removePersonAction(id)),
      clearAllFriends: () => dispatch(clearAllFriendsAction()),
      addFriend: (personId, friendId) => dispatch(addFriendAction(personId, friendId)),
    }),
  ),
  withHandlers({
    generateFriendships: ({ clearAllFriends, addFriend, personList }) => (numberOfFriends = 1) => {
      clearAllFriends();
      personList.people.forEach(p => {
        const potentialNewFriends = personList.people.filter(
          other =>
            !other.friends.some(f => f === p.id) &&
            other.friends.length < numberOfFriends &&
            other.id !== p.id,
        );
        const initialFriendCount = p.friends.length;
        const potentialNewFriendsCount = potentialNewFriends.length;
        if (initialFriendCount >= numberOfFriends || potentialNewFriendsCount === 0) {
          return;
        }
        const toBeAdded = _min([numberOfFriends, potentialNewFriendsCount]);
        const newFriends = _shuffle(potentialNewFriends).slice(0, toBeAdded);
        newFriends.forEach(f => addFriend(p.id, f.id));
      });
    },
  }),
)(Home);
