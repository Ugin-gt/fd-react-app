import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

const Week = props => {
  const { year, week } = props;

  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());

  const weekRender = () =>
    new Array(7).fill(null).map((_, i) => {
      return <Day 
      key={`${year}-${week}-${i}`}
      day={addDays(startOfWeek, i)} />;
    });

  return <tr>{weekRender()}</tr>;
};

export default Week;
