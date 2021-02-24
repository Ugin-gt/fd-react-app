import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentDay from './CurrentDay';
import CalendarBody from './CalendarBody';
import styles from './Calendar.module.css';

class Calendar extends Component {
  render () {
    const { day } = this.props;
    return (
      <div className={styles.calendar}>
        <CurrentDay currentDay={day} />
        <CalendarBody currentDay={day} />
      </div>
    );
  }
}

Calendar.propTypes = {
  day: PropTypes.instanceOf(Date),
};

Calendar.defaultProps = {
  day: new Date(),
};
export default Calendar;
