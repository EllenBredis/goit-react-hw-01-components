import PropTypes from 'prop-types';
import {List, FriendStatus, Avatar, Name} from '../FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <List>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <Avatar src={avatar} alt="User avatar"/>
      <Name>{name}</Name>
    </List>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};


