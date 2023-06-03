import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={styles.box}>
      <span className={styles.title}>Statistics</span>

      <div className="statistics">
        <ul className={styles.list}>
          <li className={styles.item}>Good: {good}</li>
          <li className={styles.item}>Neutral: {neutral}</li>
          <li className={styles.item}>Bad: {bad}</li>
          <li className={styles.item}>Total: {total}</li>
          <li className={styles.item}>Positive Feedback: {positive}%</li>
        </ul>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
