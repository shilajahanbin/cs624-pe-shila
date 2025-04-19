import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

export default function IndexScreen() {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/images/icon.png')} style={styles.icon} />

      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={text => setFavoriteCourse(text)}
      />

      <View style={styles.section}>
        <View style={styles.highlight}>
          <Text style={styles.sectionTitle}>Core Requirements (24 credits)</Text>
        </View>
        {[
          'CS 504 Software Engineering',
          'CS 506 Programming for Computing',
          'CS 519 Cloud Computing Overview',
          'CS 533 Computer Architecture',
          'CS 547 Secure Systems and Programs',
          'CS 622 Discrete Math and Algorithms for Computing',
          'DS 510 Artificial Intelligence for Data Science',
          'DS 620 Machine Learning & Deep Learning',
        ].map((course, index) => (
          <Text style={styles.course} key={index}>{course}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.highlight}>
          <Text style={styles.sectionTitle}>Depth of Study (6 Credits)</Text>
        </View>
        <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
        <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.highlight}>
          <Text style={styles.sectionTitle}>Capstone (3 Credits)</Text>
        </View>
        <Text style={styles.course}>CS 690 Capstone Project</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    backgroundColor: '#ffffff',
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 30,
  },
  highlight: {
    backgroundColor: '#ffff00',
    padding: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  course: {
    fontSize: 15,
    marginTop: 4,
    marginLeft: 5,
  },
});
