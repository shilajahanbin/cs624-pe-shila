import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard';

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePress = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={styles.container}>
      {[...Array(6)].map((_, index) => (
        <ProfileCard
          key={index}
          index={index}
          expanded={expandedIndex === index}
          onPress={handlePress}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 40, // فاصله از بالای صفحه
    gap: 10,
  },
});
