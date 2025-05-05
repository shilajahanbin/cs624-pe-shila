import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const List = ({ todos }) => (
  <View style={styles.container}>
    {todos.map((todo, index) => (
      <Text key={index} style={styles.text}>{todo.title}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default List;
