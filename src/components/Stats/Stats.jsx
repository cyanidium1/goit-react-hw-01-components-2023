import React from 'react';
import s from './Stats.module.css';
import PropTypes from 'prop-types';

const Stats = stats => {
  function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  function Header(title) {
    // console.log(title);
    if (title) {
      return <h2 className={s.header}>{title.props}</h2>;
    }
  }
  return (
    <section className={s.stats}>
      <Header props={stats.title} />
      <ul className={s.statList}>
        {stats.stats.map(el => (
          <li
            key={el.id}
            className={s.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Stats;
