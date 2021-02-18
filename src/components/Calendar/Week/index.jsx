import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

const Week = props => {
  /* 
    1. Число недели  в году
    2. Объект начала недели
  */

  const { year, week } = props;

  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());

  const dayArray = [];

  for (let i = 0; i < 7; i++) {
    dayArray.push(
      <Day key={`${i}-${year}-${week}`} day={addDays(startOfWeek, i)} />
    );
  }

  return <tr>{[dayArray]}</tr>;
};

export default Week;