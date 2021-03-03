import React, { useState, useEffect } from 'react';
import styles from './UseEffectStopWatch.module.css';
import { addMilliseconds, format } from 'date-fns';

const UseEffectStopWatch = props => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const switchStopWatch = () => setIsRunning(!isRunning);

  useEffect(() => {
    console.log('useEffect');
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime(prevTime => addMilliseconds(prevTime, 1000));
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  const reset = () => {
    clearInterval();
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  return (
    <article className={styles.container}>
      <h1 className={styles.currentTime}>{format(time, 'HH:mm:ss')}</h1>
      <div className={styles.controls}>
        <button className={styles.btn} onClick={switchStopWatch}>
          {isRunning ? 'STOP' : 'START'}
        </button>
        <button className={styles.btn} onClick={reset}>RESET</button>
      </div>
    </article>
  );
};
export default UseEffectStopWatch;
