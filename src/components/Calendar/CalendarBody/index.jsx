import React from 'react';
import { format, startOfWeek, addDays, getYear, getMonth } from 'date-fns';
import Month from '../Month';
import styles from './CalendarBody.module.css';

const WeekDays = props => {
  const titleOfWeek = new Array(7).fill(null).map((_, i) => {
    const dayWeek = startOfWeek(props.currentDay);
    return <td key={`${i}`}> {format(addDays(dayWeek, i), 'EEEEEE')} </td>;
  });

  return <tr>{[titleOfWeek]}</tr>;
};

const CurrentMonth = props => {
  return (
    <>
      {format(props.currentDay, 'MMMM').toUpperCase()}
      {format(props.currentDay, ' y')}
    </>
  );
};

const CalendarBody = props => {
  const { currentDay } = props; // ОБъект Date
  return (
    <div className={styles.calendarBody}>
      <div className={styles.currentMonth}>
        <CurrentMonth currentDay={currentDay} />
      </div>
      <table>
        <thead className={styles.weekDays}>
          <WeekDays currentDay={currentDay} />
        </thead>
        <tbody>
          <Month year={getYear(currentDay)} month={getMonth(currentDay) + 1} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
