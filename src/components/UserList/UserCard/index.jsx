import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '../../../contexts';
import cx from 'classnames';
import styles from './UserCard.module.scss';

const UserCard = props => {
  const [user, setUser] = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const btnHandler = () => {
    setTheme({ theme: !theme });
  };

  const classNames = cx(styles.container, {
    [styles.lightTheme]: theme === 'lightTheme',
    [styles.darkTheme]: theme !== 'lightTheme',
  });

  return (
    <article className={classNames}>
      <button className={styles.btn} onClick={btnHandler}>
        Switch Theme
      </button>
      <h1>
        Full Name: {user.firstName} {user.lastName}
        <br /> Uid:{user.id}
      </h1>
      <div>
        <img src={user.imageSrc} alt='UserFoto' />
      </div>
    </article>
  );
};

export default UserCard;
