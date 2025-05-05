import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({ type, setType }) => {
  return (
    <View style={styles.container}>
      <TabBarItem title="All" type={type} setType={setType} />
      <TabBarItem title="Active" type={type} setType={setType} />
      <TabBarItem title="Complete" type={type} setType={setType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabBar;
