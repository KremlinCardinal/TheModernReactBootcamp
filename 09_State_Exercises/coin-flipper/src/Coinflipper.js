import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

export default class Coinflipper extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imageSrc: 'coin/heads.png' },
      { side: 'tails', imageSrc: 'coin/tails.png' }
    ]
  }

  constructor(props) {
    super(props);
    this.state = { currentCoin: null, numberFlips: 0, numberHeads: 0, numberTails: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(previousState => {
      return {
        currentCoin: newCoin,
        numberFlips: previousState.numberFlips + 1,
        numberHeads: previousState.numberHeads + (newCoin.side === 'heads' ? 1 : 0),
        numberTails: previousState.numberTails + (newCoin.side === 'tails' ? 1 : 0)
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className='Coinflipper'>
        <h2>Let's flip a coin!</h2>
        {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
        <button onClick={this.handleClick}>Flip me!</button>
        <p>Out of {this.state.numberFlips} flips, there have been {this.state.numberHeads} heads and {this.state.numberTails} tails.</p>
      </div>
    )
  }
}
