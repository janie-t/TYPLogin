import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class Secured extends Component{
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.header}>You are now logged in</Text>
        <Button
          onPress={this.props.onLogoutPress}
          title='LOGOUT'
          backgroundColor='#72ae39'
          color='#fff'
          />
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
  },
  header: {
    color: 'white',
    fontSize: 30,
    padding: 20
  }
})
