import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

const TodoButton = ({ onPress, complete, name }) => (
    <TouchableHighlight
    onPress={onPress}
    underlayColor="#efefef"
    style={[
        styles.button,
        name === 'Delete' ? styles.deleteButton : null,
        name === 'Submit' ? styles.submitButton : null
    ]}
    >

    <Text
      style={[
        styles.text,
        complete ? styles.complete : null,
        name == 'Delete' ? styles.deleteText : null
      ]}
    >
      {name}
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
    borderWidth: 1,
    marginHorizontal: 6,
    marginVertical: 4,
    alignItems: 'center',
  },
  defaultButton: {
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
  },
  deleteButton: {
    borderColor: '#ff5555',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
  complete: {
    fontWeight: 'bold',
    color: 'green',
  },

  submitButton: {
    alignSelf: 'center',
    width: '40%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 20,
  },

  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  }
  
});

export default TodoButton;
