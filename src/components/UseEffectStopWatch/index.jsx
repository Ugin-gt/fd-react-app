import React, { useState, useEffect } from 'react';
import styles from './UseEffectStopWatch.module.css';
import {format} from 'date-fns';

const StopWatch = props => {
 
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const switchStopWatch = () => {setIsRunning(!isRunning)};

  const tick = (time) => {
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    };
  };

  useEffect(() => {
   

  const clear = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };

  const reset = () => {
    this.clear();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };


  return (
    <article className={styles.container}>
    <h1 className={styles.currentTime}>
      {time.toLocaleTimeString('it-IT')}
    </h1>
    <div className={styles.controls}>
        <button className={styles.btn}
        onClick={switchStopWatch}> {isRunning? 'STOP':'START'} 
        </button>
        <button className={styles.btn}
        onClick={reset}>
        RESET
      </button>
    </div>
  </article>
  );
    }}



export default StopWatch;
