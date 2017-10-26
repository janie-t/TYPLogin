import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Splash extends Component{
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>Kia Ora this is the Splash Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#72ae39',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})