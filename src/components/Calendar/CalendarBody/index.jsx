import React from 'react';
import { getWeek, parse } from 'date-fns';
import Week from '../Week';

const WeekDays = () => {
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

const CalendarBody = props => {
  const { currentDay } = props; // ОБъект Date

  console.log(getWeek(currentDay)); // Определяет число недели в году

  return (
    <div>
      <table>
        <thead>
          <WeekDays />
        </thead>
        <tbody>
          <Week year={2021} week={6} />
          <Week year={2021} week={7} />
          <Week year={2021} week={8} />
          <Week year={2021} week={9} />
          <Week year={2021} week={10} />
          <Week year={2021} week={11} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;