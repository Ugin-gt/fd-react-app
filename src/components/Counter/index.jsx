import React, { Component } from 'react';
import styles from './Counter.module.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }
 
    handleClick() {
      const { count } = this.state;
      this.setState({ count: count + this.props.step});
    };
  
  
  render() {
    const { count} = this.state;
    return (
      <article className={styles.container}>
        <h1 className={styles.count}>{count}</h1>
        <div className={styles.count}> Шаг инкремента +{this.props.step} 

        </div>
        <div>
          <button className={styles.btn} onClick={this.handleClick}>
            Добавить
          </button>
        </div>
      </article>
    );
  }
}

export default Counter;
