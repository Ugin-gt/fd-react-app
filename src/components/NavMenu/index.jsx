import React, { useContext, useEffect, useRef } from 'react';
import {  Close } from '@material-ui/icons';
import { NavLink, Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './NavMenu.module.scss';
import { AppContext } from '../../contexts';

const NavMenu = props => {
  const {
    state: { isMenuOpen },
    closeMenu,
  } = useContext(AppContext);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (isMenuOpen && !navRef.current.contains(target)) {
        closeMenu();
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isMenuOpen]);

  const classNames = cx(styles.container, {
    [styles.open]: isMenuOpen,
  });
  return (
      <nav ref={navRef} className={classNames}>
      <Close
        tabIndex='0'
        fontSize='large'
        onClick={closeMenu}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            closeMenu();
          }
        }}
        classes={{ root: styles.closeIcon }}
      />
        <ul className={styles.list}>
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
  );
};

export default NavMenu;
