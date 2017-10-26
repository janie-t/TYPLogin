import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';

import LoginForm from './LoginForm'

export default class Login extends Component{
  render() {
    return (
      <KeyboardAvoidingView behaviour='padding' style={styles.container}>
        <View style={styles.container}>
          <LoginForm />
          <View>
            <Text style={styles.logoText}>Thankyou</Text>
            <Text style={styles.logoText}>Payroll</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72ae39',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#a0cc5b',
    textAlign: 'center'
  }
})
