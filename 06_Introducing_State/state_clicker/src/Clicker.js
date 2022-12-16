import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);

    //Initializes and sets the default value of the "num" state
    this.state = {
      num: 1
    }

    this.generateNumber = this.generateNumber.bind(this);
  }

  //Generates random number between 1 and 10 and binds it to the "num" state
  generateNumber(e) {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: rand });
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {/* Checks if random number is 7 */}
        {this.state.num === 7
          ? <h2>YOU WIN!</h2>
          : <button onClick={this.generateNumber}>Random Number</button>
        }
      </div>
    );
  }
}

export default Clicker;