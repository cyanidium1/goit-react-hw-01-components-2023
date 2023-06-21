import React from 'react';
import s from './FrListItem.module.css';
import PropTypes from 'prop-types';

const FrListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FrListItem.propTypes = {
  item: PropTypes.object,
};

export default FrListItem;
