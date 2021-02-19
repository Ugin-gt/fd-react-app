import React from 'react';
import { getWeek, parse, format, startOfWeek, addDays } from 'date-fns';
import Week from '../Week';
import Month from '../Month';
import styles from './CalendarBody.module.css';

const WeekDays = (props) => {
  const nameOfwDay = [];
  const dayWeek = startOfWeek(props.currentDay);
  for (let i = 0; i < 7; i++) {
    nameOfwDay.push(
      <td key={`${i}`}> {format(addDays(dayWeek, i), 'EEEEEE')} </td>
    );
  }
  return <tr>{[nameOfwDay]}</tr>;
};

const CurrentMonth = (props) => {
  return (
    <>
      {format(props.currentDay, 'MMMM').toUpperCase()}
      {format(props.currentDay, 'y')}
    </>
  );
};

const CalendarBody = (props) => {
  const {currentDay } = props; // ОБъект Date

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
          <Month year={2021} month={2} currentDay={currentDay}  />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
