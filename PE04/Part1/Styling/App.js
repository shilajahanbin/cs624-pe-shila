import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('./assets/images/user.png')}
            />
          </View>

          <Text style={styles.name}>Shila Jahanbin</Text>
          <Text style={styles.occupation}>Cloud & Web Developer</Text>
          <Text style={styles.description}>
            Passionate about clean code, beautiful user interfaces, and building scalable mobile applications. I love working with modern tools like React Native and bringing ideas to life through design and development.
          </Text>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  occupation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 12,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    textAlign: 'justify',
    marginHorizontal: 10,
  },
});
