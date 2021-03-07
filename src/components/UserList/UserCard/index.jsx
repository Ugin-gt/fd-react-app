import React, { useContext, useState, useCallback } from 'react';
import { UserContext, ThemeContext } from '../../../contexts';
import cx from 'classnames';
import styles from './UserCard.module.scss';
import { THEMES } from '../../../constants';

const UserCard = props => {
  const [value, setValue] = useState(1);
  const [user] = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const switchOnce = useCallback(() => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }, [theme]);

  const classNames = cx(styles.container, {
    [styles.lightTheme]: theme === THEMES.LIGHT,
    [styles.darkTheme]: theme === THEMES.DARK,
  });

  const onChangeInput = ({ target: { value } }) => {
    setValue(Number(value));
  };

  const logResult = useCallback(() => {
    console.log(value);
  }, [value]);

  return (
    <article className={classNames}>
      <button className={styles.btn} onClick={switchOnce}>
        {theme === THEMES.LIGHT ? 'Set Dark Theme' : 'Set Light Theme'}
      </button>
      <br />
      <input
        className={styles.input}
        type='number'
        value={value}
        onChange={onChangeInput}
      />
      <button className={styles.btn} onClick={logResult}>
        Log Result
      </button>
      <h1>
        Full Name: {user.firstName} {user.lastName}
        <br /> Uid:{user.id}
      </h1>
      <p>
        Jason Statham (/ˈsteɪθəm/; born 26 July 1967) is an English actor and
        film producer. Typecast as the antihero, he is known for his
        action-thriller roles and portraying tough, irredeemable, and
        machiavellian characters. Born in Shirebrook, Derbyshire, he began
        practising kung fu, kickboxing and karate recreationally in his youth
        while working at local market stalls. An avid footballer and diver, he
        was selected by Britain's national diving team to compete in the 1990
        Commonwealth Games. Shortly after, he was asked to model for French
        Connection, Tommy Hilfiger, and Levi's in various advertising campaigns.
        Statham's past professional history working in market stalls inspired
        his casting in the Guy Ritchie crime films Lock, Stock and Two Smoking
        Barrels (1998) and Snatch (2000).
      </p>
      <div>
        <img src={user.imageSrc} alt='UserFoto' />
      </div>
    </article>
  );
};

export default UserCard;
