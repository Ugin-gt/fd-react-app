import React from 'react';
import { addMonths, getWeek, parse, format, startOfWeek} from 'date-fns';
import Week from '../Week';
import Month from '../Month';
import styles from './CalendarBody.module.css';

const CalendarBody = (props) => {
  const { currentDay } = props; // ОБъект Date

  const CurrentMonth = () => {
    return (
      <>
        {format(currentDay, 'MMMM').toUpperCase()} {format(currentDay, 'y')}
      </>
    );
  };
  console.log(format(startOfWeek(currentDay),'EEEEEE'));
  const WeekDays = () => {
//   const nameOfwDay =[]
//     for (let i = 0; i < 7; i++) {

//       nameOfwDay.push(
//       <WeekDays key={`${i}`} weekDay={format(startOfWeek(currentDay),'EEEEEE')} />
//     );
//   }

//   return <tr>{[nameOfwDay]}</tr>;
// };
    return (
      <tr>
        <td>Sun</td>
        <td>Mon</td>
        <td>Tue</td>
        <td>Wed</td>
        <td>Thu</td>
        <td>Fri</td>
        <td>Sat</td>
      </tr>
    );
  };
  

  return (
    <div className={styles.calendarBody}>
      <div className={styles.currentMonth}>
        <CurrentMonth />
      </div>
      <table>
        <thead className={styles.weekDays}>
          <WeekDays />
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
