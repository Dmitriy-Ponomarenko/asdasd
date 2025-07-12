// src/components/Header/Header.tsx

import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <section className={styles.headerSection}>
      <div className={styles.headerContainer}></div>
    </section>
  );
};
