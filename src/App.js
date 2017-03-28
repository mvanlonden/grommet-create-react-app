import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { default as GrommetApp } from 'grommet/components/App'
import Headline from 'grommet/components/Headline'
import Image from 'grommet/components/Image'

class App extends Component {
  render() {
    return (
      <GrommetApp>
        <Image src={logo} />
        <Headline>Welcome to React with Grommet</Headline>
      </GrommetApp>
    );
  }
}

export default App;
