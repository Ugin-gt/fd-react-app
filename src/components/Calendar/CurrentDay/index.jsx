import React from 'react';
import { format } from 'date-fns';
import styles from './CurrentDay.module.css';

const CurrentDay = props => {
  const { currentDay } = props; // ОБъект Date
  return (
    <div className={styles.currentDay}>
      <div className={styles.currentDayOfW}>{format(currentDay, 'EEEE').toUpperCase()}</div>
      <div className={styles.currentDate}>{format(currentDay, 'd')}</div>
    </div>
  );
};

export default CurrentDay;
