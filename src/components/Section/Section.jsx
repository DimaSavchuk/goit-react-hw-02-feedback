import React from 'react';

import styles from '../../styles/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles.app}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
