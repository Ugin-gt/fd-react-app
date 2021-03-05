import React, { useState } from 'react';
import styles from './NavigationMenu.module.scss';
import { Link } from 'react-router-dom';

const NavigationMenu = props => {
  const [state, setState] = useState(false);

  const handleClick = () => setState(!state);

  return (
    <div>
      <button onClick={handleClick}>Dislpay Menu</button>
      <nav className={styles.container}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/calendar'>Calendar</Link>
          </li>
          <li>
            <Link to='/window'>Window Size</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/user-cont'>UserContext</Link>
          </li>
          <li>
            <Link to='/stop-watch'>UseEffectStopWatch</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
