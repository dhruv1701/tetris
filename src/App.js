import React, { Component } from 'react';
import Z from "./component/figures/Z/Z";
import T from "./component/figures/T/T";
import S from "./component/figures/square/square";
import Line from "./component/figures/line/line";
import L from "./component/figures/L/L";
import Tetris from './container/tetris/tetris';

class App extends Component {
  render() {
    return (
      <div  >
        <Tetris/>
      </div>
    );
  }
}

export default App;
