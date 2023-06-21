import React from 'react';
import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ t }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {t.map(el => (
          <tr key={el.id}>
            <td className={s.item}>{el.type}</td>
            <td className={s.item}> {el.amount}</td>
            <td className={s.item}> {el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
