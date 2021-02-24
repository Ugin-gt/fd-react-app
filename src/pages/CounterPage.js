import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      step: 3,
    };
  }
  handleCange = e => {
    this.setState({
      step: Number(e.target.value),
    });
  };

  render () {
    const { step } = this.state;

    return (
      <div>
        step: {step}
        <div>
          <input
            type='range'
            min='0'
            max='50'
            value={step}
            onChange={this.handleCange}
          />
        </div>
        <Counter  step={step}/>
      </div>
    );
  }
}

export default CounterPage;
