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
      {format(props.currentDay, 'MMMM').toUpperCase()}{' '}
      {format(props.currentDay, 'y')}
    </>
  );
};

const CalendarBody = (props) => {
  const { currentDay } = props; // ОБъект Date

  //   return (
  //     <tr>
  //       <td>Sun</td>
  //       <td>Mon</td>
  //       <td>Tue</td>
  //       <td>Wed</td>
  //       <td>Thu</td>
  //       <td>Fri</td>
  //       <td>Sat</td>
  //     </tr>
  //   );

  return (
    <div className={styles.calendarBody}>
      <div className={styles.currentMonth}>
        <CurrentMonth currentDay={currentDay} />
      </div>
      <table>
        <thead className={styles.weekDays}>
          <WeekDays currentDay={currentDay} />
        </thead>
        <tbody className={styles.days}>
          <Week year={2021} week={6} />
          <Week year={2021} week={7} />
          <Week year={2021} week={8} />
          <Week year={2021} week={9} />
          <Week year={2021} week={10} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
