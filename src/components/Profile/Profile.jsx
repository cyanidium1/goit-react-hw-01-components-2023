import React from 'react';

import s from './Profile.module.css';

const Profile = ({ profile }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={s.avatar}
        />
        <p className={s.name}>{profile.username}</p>
        <p className={s.about}>@{profile.tag}</p>
        <p className={s.about}>{profile.location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.litem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{profile.stats.followers}</span>
        </li>
        <li className={s.litem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{profile.stats.views}</span>
        </li>
        <li className={s.litem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{profile.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
