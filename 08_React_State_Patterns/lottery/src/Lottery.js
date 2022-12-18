import React, { Component } from 'react';
import './Lottery.css';
import LotteryBall from './LotteryBall';

export default class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(n =>
        Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));

  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <div className='Lottery'>
        <h1>{this.props.title}</h1>
        <div className='ballsContainer'>
          {this.state.nums.map(n =>
            <LotteryBall num={n} />
          )}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    )
  }
}
