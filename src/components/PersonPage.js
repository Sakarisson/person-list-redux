import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SortSelect from './SortSelect';
import getFriends from '../util/getFriends';
import {
  setSortBy as setSortByAction,
  setSortOrder as setSortOrderAction,
} from '../store/actions/personListActions';

const FriendsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const KeyDescription = styled.div`
  font-weight: bold;
  padding-bottom: 1em;
`;

const SortFriendsByContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SortFriendsByText = styled.div`
  line-height: 20px;
  font-size: 14px;
`;

const sortByOptions = ['none', 'name', 'city'];
const sortOrderOptions = ['ascending', 'descending'];

const PersonPage = ({ person, friends, setSortBy, setSortOrder }) => (
  <div>
    <p>{`${person.firstName} ${person.lastName}'s page`}</p>
    <p>
      {person.firstName} lives at {person.address.streetAddress}, {person.address.zipCode},{' '}
      {person.address.city}
    </p>
    <div>
      {!!friends.length && (
        <Fragment>
          <SortFriendsByContainer>
            <SortFriendsByText>Sort friends by:</SortFriendsByText>
            <SortSelect
              values={sortByOptions.map(option => ({ key: option, name: option }))}
              selected={person.friendsSortBy}
              onChange={e => setSortBy(e.target.value)}
            />
          </SortFriendsByContainer>
          <SortFriendsByContainer>
            <SortFriendsByText>Sort friends order:</SortFriendsByText>
            <SortSelect
              values={sortOrderOptions.map(option => ({ key: option, name: option }))}
              selected={person.friendsSortOrder}
              onChange={e => setSortOrder(e.target.value)}
            />
          </SortFriendsByContainer>
          <FriendsContainer>
            <KeyDescription>Full name</KeyDescription>
            <KeyDescription>City</KeyDescription>
            {friends.map(friend => (
              <Fragment key={friend.id}>
                <Link to={`/people/${friend.id}`}>{`${friend.firstName} ${friend.lastName}`}</Link>
                <div>{friend.address.city}</div>
              </Fragment>
            ))}
          </FriendsContainer>
        </Fragment>
      )}
    </div>
  </div>
);

const personProp = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  friendsSortBy: PropTypes.string.isRequired,
  friendsSortOrder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

PersonPage.propTypes = {
  person: personProp.isRequired,
  friends: PropTypes.arrayOf(personProp),
  setSortBy: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
};

PersonPage.defaultProps = { friends: [] };

export default connect(
  (state, ownProps) => ({
    friends: getFriends(
      state,
      ownProps.person.id,
      ownProps.person.friendsSortBy,
      ownProps.person.friendsSortOrder,
    ),
  }),
  (dispatch, ownProps) => ({
    setSortBy: sortBy => dispatch(setSortByAction(ownProps.person.id, sortBy)),
    setSortOrder: sortOrder => dispatch(setSortOrderAction(ownProps.person.id, sortOrder)),
  }),
)(PersonPage);
