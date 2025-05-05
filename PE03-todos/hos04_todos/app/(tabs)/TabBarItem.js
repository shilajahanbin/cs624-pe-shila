import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const TabBarItem = ({ type, title, setType }) => {
  return (
    <TouchableHighlight
      style={[styles.item, type === title && styles.selected]}
      underlayColor="#ddd"
      onPress={() => setType(title)}
    >
      <Text style={[styles.text, type === title && styles.selectedText]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f5f5f5',
  },
  text: {
    color: '#888',
  },
  selected: {
    borderTopWidth: 2,
    borderTopColor: '#000',
  },
  selectedText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TabBarItem;
