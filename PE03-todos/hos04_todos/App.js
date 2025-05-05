import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TabBar from './app/(tabs)/TabBar';
import TodoButton from './app/(tabs)/TodoButton';
import TodoList from './app/(tabs)/TodoList';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };

    this.setType = this.setType.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  setType(type) {
    this.setState({ type });
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({ todos });
  }

  inputChange(inputValue) {
    this.setState({ inputValue });
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) return;

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;

    this.setState({
      todos: [...this.state.todos, todo],
      inputValue: '',
    });
  }

  render() {
    const { inputValue, todos, type } = this.state;

    let todosToDisplay = todos;
    if (type === 'Active') {
      todosToDisplay = todos.filter((todo) => !todo.complete);
    } else if (type === 'Complete') {
      todosToDisplay = todos.filter((todo) => todo.complete);
    }

    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="always"
          >
            <Heading />
            <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
            <TodoList
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
              todos={todosToDisplay}
            />
            <TodoButton name="Submit" onPress={this.submitTodo} />
          </ScrollView>
        </View>
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginBottom: 60, // جا برای TabBar
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 80,
  },
});

export default App;
