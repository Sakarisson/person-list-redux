import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';
import { min as _min, shuffle as _shuffle } from 'lodash';
import styled from 'styled-components';

import PersonList from '../PersonList';
import AddPeople from './AddPeople';
import {
  addPerson as addPersonAction,
  removePerson as removePersonAction,
  clearAllFriends as clearAllFriendsAction,
  addFriend as addFriendAction,
  setSortBy as setSortByAction,
  setSortOrder as setSortOrderAction,
} from '../../store/actions/personListActions';
import SortSelect from '../SortSelect';

const SortByContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SortByText = styled.div`
  line-height: 20px;
  font-size: 14px;
`;

const sortByOptions = ['none', 'name', 'city'];
const sortOrderOptions = ['ascending', 'descending'];

const Home = ({
  people,
  sortBy,
  sortOrder,
  addPerson,
  removePerson,
  generateFriendships,
  setSortBy,
  setSortOrder,
}) => (
  <div>
    <AddPeople addPerson={addPerson} />
    <SortByContainer>
      <SortByText>Sort people by:</SortByText>
      <SortSelect
        values={sortByOptions.map(option => ({ key: option, name: option }))}
        selected={sortBy}
        onChange={e => setSortBy(e.target.value)}
      />
    </SortByContainer>
    <SortByContainer>
      <SortByText>Sort people by:</SortByText>
      <SortSelect
        values={sortOrderOptions.map(option => ({ key: option, name: option }))}
        selected={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
      />
    </SortByContainer>
    {people.length > 1 && (
      <button type="button" onClick={() => generateFriendships(5)}>
        Generate friendships
      </button>
    )}
    {!!people.length && (
      <Fragment>
        <p>People:</p>
        <PersonList
          people={people}
          removePerson={removePerson}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </Fragment>
    )}
  </div>
);

Home.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortBy: PropTypes.oneOf(['none', 'name', 'city']).isRequired,
  sortOrder: PropTypes.oneOf(['ascending', 'descending']).isRequired,
  addPerson: PropTypes.func.isRequired,
  removePerson: PropTypes.func.isRequired,
  generateFriendships: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
};

export default compose(
  connect(
    state => ({
      people: state.personList.people,
      sortBy: state.personList.sortBy,
      sortOrder: state.personList.sortOrder,
    }),
    dispatch => ({
      addPerson: person => dispatch(addPersonAction(person)),
      removePerson: id => dispatch(removePersonAction(id)),
      clearAllFriends: () => dispatch(clearAllFriendsAction()),
      addFriend: (personId, friendId) => dispatch(addFriendAction(personId, friendId)),
      setSortBy: sortBy => dispatch(setSortByAction(sortBy)),
      setSortOrder: sortOrder => dispatch(setSortOrderAction(sortOrder)),
    }),
  ),
  withHandlers({
    generateFriendships: ({ clearAllFriends, addFriend, people }) => (numberOfFriends = 1) => {
      clearAllFriends();
      people.forEach(p => {
        const potentialNewFriends = people.filter(
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
