import PropTypes from 'prop-types';
// import style from './Profile.module.css';
import {User, Description, Avatar, Name, Tag, Location, Stats, List, Label, Quantity} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
     return (
        <User>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
      />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <List>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </List>
    <List>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </List>
    <List>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </List>
  </Stats>
</User>
      
    );
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };