/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Component1 from './app/components/Component1';
import Component2 from './app/components/Component2';
import Component3 from './app/components/Component3';
import Component4 from './app/components/Component4';
import Component5 from './app/components/Component5';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const navigationOptions = {
  title: 'Welcome',
};

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.welcome}>
            Welcome to my app!
        </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
        </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>

          <Component1 message="hellow world from component!" />
          <Component2 message="hellow world from component!" />
          <Component3 message="hellow world from component!" />
          <Component4 message="hellow world from component!" />
          <Component5 message="hellow world from component!" />

          <Button
            title="Go to Jane's profile"
            onPress={() => { }
            }
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
