/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,Text, TextInput, View, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import NameInput from './src/components/TextInput/TextInput'
import AddButton from './src/components/AddButton/AddButton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    name: '',
    names: []
  }

  nameChangedHandler = (val) => {
    this.setState({
      name: val
    })
  }

  onAddNameHandler = () => {
    // alert(this.state.name)
    if (this.state.name === '') {
      return;
    }

    this.setState((prevState => {
      return {
        names: prevState.names.concat(this.state.name)
      }
    }), () => this.setState({name: ''}))
    
  }

  render() {
    const all_names = this.state.names.map(name => {
      return (
        <ListItem 
        key= {Math.random().toString(36)}
        person={name}/>
      )
    })
    return (
      <View style={styles.container}>

        <View style={styles.addStyle}>
          <NameInput
            // style={styles.input}
            val={this.state.name}
            change={this.nameChangedHandler}
            placeholder="" />

          <AddButton
          title="" 
          onAddName={this.onAddNameHandler} 
          />

        </View>
        <View style={styles.listContainer}>
          {all_names}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: "flex-start",
    fontSize: 18,
    marginTop : 10
  },
  
  addStyle: {
    width: "95%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listContainer: {
    width: "100%",
    marginTop: 25,
    alignItems: 'center'
  }
});
