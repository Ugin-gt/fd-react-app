import React from 'react';
import {format, isToday, isSameMonth} from 'date-fns';
import cx from 'classnames';
import styles from './Day.module.scss';

const Day = props => {
  const { day, currentDay } = props;

  const classNames = cx
  return <td>{format(day, 'd')}</td>;
};

export default Day;