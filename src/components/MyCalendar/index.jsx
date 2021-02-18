import React, { Component } from 'react';
import { addDays, format } from 'date-fns';
import CurrentDay from './CurrentDay';

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date(),
    };
  }

  render() {
    return (
      <div>
        <CurrentDay currentDay={this.state.currentDay}/>
        {/* <CalendarBody /> */}
      </div>
    );
  }
}

export default MyCalendar;
