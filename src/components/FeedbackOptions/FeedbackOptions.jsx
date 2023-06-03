import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/Feedback.module.css';

const FeedbackOptions = ({ title, buttons, onFeedbackClick }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
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
    </>
  );
};

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
