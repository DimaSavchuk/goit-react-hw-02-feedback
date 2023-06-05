import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Feedback.module.css';

const FeedbackOptions = ({ buttons, onFeedbackClick }) => {
  return (
    <ul className={styles.list}>
      {buttons.map(button => (
        <li key={button} className={styles.item}>
          <button
            className={styles.button}
            onClick={() => onFeedbackClick(button)}
          >
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
