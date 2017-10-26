import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/components/Login';
import Secured from './src/components/Secured';


export default class App extends Component<{}> {

  state = {
    isLoggedIn: false
  }

  render() {
    if(this.state.isLoggedIn)
      return <Secured
        onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else {
      return <Login
        onLoginPress={() => this.setState({isLoggedIn: true})}
        />
    }
  }
}
