import React from 'react';

import styles from '../../styles/Notification.module.css';

const Notification = ({ message }) => {
  return <span className={styles.title}>{message}</span>;
};

export default Notification;
