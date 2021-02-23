import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WindowSize extends Component {
  constructor (props) {
    super(props);
    this.state = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
  }
  componentDidMount () {
    window.addEventListener('resize', this.resizeHandler);
  }
  resizeHandler = () => {
    this.setState({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeHandler);
  }

  render () {
    const { x, y } = this.state;
    return (
      <div>
        Current Window Size are: widht - {x}, height -{y}
      </div>
    );
  }
}

export default WindowSize;
