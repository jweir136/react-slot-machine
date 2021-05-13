import React, { useState } from 'react'

import CoinTracker from './CoinTracker';
import Slot from './Slot';

const tableStyle = {
  width: '50%',
  height: '50%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};
const tableColumnStyle = {
  float: 'left',
  width: '33%'
};

const buttonStyle = {
  width: '50%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const CHOICES = [1, 2, 3];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: 10,
      slot1: ' ',
      slot2: ' ',
      slot3: ' '
    };

    this.minusCoin = this.minusCoin.bind(this);
    this.spin = this.spin.bind(this);
    this.turn = this.turn.bind(this);
  }

  minusCoin() {
    this.setState({coins: this.state.coins-1});
  }

  spin() {
    this.setState({
      slot1:Math.floor(Math.random() * (4 - 1) + 1),
      slot2:Math.floor(Math.random() * (4 - 1) + 1),
      slot3:Math.floor(Math.random() * (4 - 1) + 1)
    });
  }

  turn() {
    if (this.state.coins > 0) {
      this.minusCoin();
      this.spin();

      if (this.state.slot1 === 1 && this.state.slot2 === 1 && this.state.slot3 === 1)
        this.setState({coins: this.state.coins+2});
      else if (this.state.slot1 === 2 && this.state.slot2 === 2 && this.state.slot3 === 2)
        this.setState({coins: this.state.coins+4});
      else if (this.state.slot1 === 3 && this.state.slot2 === 3 && this.state.slot3 === 3)
        this.setState({coins: this.state.coins+8});
    } else {
      alert('GAME OVER');
    }
  }

  render() {
    return (
      <div>
      <CoinTracker coins={this.state.coins}/>
      <div style={tableStyle}>
        <div style={tableColumnStyle}><Slot value={this.state.slot1} /></div>
        <div style={tableColumnStyle}><Slot value={this.state.slot2} /></div>
        <div style={tableColumnStyle}><Slot value={this.state.slot3} /></div>
      </div>
      <button style={buttonStyle} onClick={this.turn}>
        <h3>Spin!</h3>
      </button>
      </div>
    );
  }
}

export default App;
