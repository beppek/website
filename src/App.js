import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';

import Menu from './Components/Menu/Menu';

import logo from './logo-mini.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Menu/>
        </div>
        <div className="content">
          <p className="App-intro"></p>
        </div>
      </div>
    );
  }
}

export default App;
