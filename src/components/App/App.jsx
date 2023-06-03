import React, { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

import styles from '../../styles/App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onFeedbackClick = button => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [button]: prevFeedback[button] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback > 0) {
      return Math.round((feedback.good / totalFeedback) * 100);
    }
  };

  const buttons = Object.keys(feedback);

  return (
    <section className={styles.app}>
      <FeedbackOptions
        title="Please leave feedback"
        buttons={buttons}
        onFeedbackClick={onFeedbackClick}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback()}
          positive={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </section>
  );
};

export default App;
