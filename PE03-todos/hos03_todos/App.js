import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableHighlight, Text } from 'react-native';
import Input from './Input';
import Heading from './Heading';
import List from './List';



class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  addTodo = () => {
    if (this.state.inputValue.trim() !== '') {
      const newTodo = {
        title: this.state.inputValue,
        complete: false,
      };
      this.setState({
        todos: [...this.state.todos, newTodo],
        inputValue: '',
      });
      console.log('Todos: ', this.state.todos);
    }
  }
  
  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input 
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
            <TouchableHighlight style={styles.button} underlayColor="#ccc" onPress={() => this.addTodo()}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
            <List todos={this.state.todos} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 80,
  },

  button: {
  height: 40,
  width: 200,
  backgroundColor: '#FF9900', 
  borderRadius: 20, 
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center', 
  marginTop: 20,
},
buttonText: {
  color: '#ffffff',
  fontSize: 16,
  fontWeight: 'bold',
},

  
});

export default App;
