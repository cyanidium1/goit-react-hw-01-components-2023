import React from 'react';
import s from './Stats.module.css';

const Stats = ({ stats }) => {
  function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  return (
    <section className={s.stats}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        {stats.map(el => (
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

export default Stats;
