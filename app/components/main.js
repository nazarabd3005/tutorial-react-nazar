/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Main extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.welcome}>Im header</Text>
        </View>
        <ScrollView>
        </ScrollView>
        <View style={styles.footer}>
            <TextInput
                style={styles.textInput}
                multiline
                placeholder="write something here"
                placeholderTextColor="gray"/>
                   <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>add me!</Text>
        </TouchableOpacity>
        </View>
     
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      backgroundColor : 'blue',
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#252525',
    right: 0,
    zIndex: 10,
  },
  textInput: {
    flex:1,
    color: '#fff',
  },
  addButton: {
    height: 100,
    backgroundColor: 'red',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color : 'white',
  }
});
