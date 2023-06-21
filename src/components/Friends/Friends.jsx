import FrListItem from 'components/FrListItem/FrListItem';
import React from 'react';
import s from './Friends.module.css';
import PropTypes from 'prop-types';
//hm
const Friends = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(el => (
        <FrListItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default Friends;
