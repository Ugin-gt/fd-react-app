import React from 'react';
import Week from '../Week';
import PropTypes from 'prop-types';
import {
  parse,
  getWeek,
  addWeeks,
  getYear,
  startOfWeek,
  getWeeksInMonth,
} from 'date-fns';

const Month = props => {
  const { year, month } = props;

  const startOfMonth = parse(`${year} ${month}`, 'y M', new Date());
  const getWeekStart = startOfWeek(startOfMonth);
  const weekAmount = getWeeksInMonth(startOfMonth);

  const weekArray = new Array(weekAmount).fill(null).map((_, i) => {
    const startOfWeek = addWeeks(getWeekStart, i);
    return (
      <Week
        key={`${year}-${month}-${i}`}
        year={getYear(startOfWeek)}
        week={getWeek(startOfWeek)}
      />
    );
  });

  return <>{[weekArray]}</>;
};


Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

export default Month;
