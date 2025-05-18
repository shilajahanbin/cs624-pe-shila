import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';

const ProfileCard = ({ index, expanded, onPress }) => {
  const scale = expanded ? 1.25 : 0.85;

  return (
    <TouchableOpacity onPress={() => onPress(index)} activeOpacity={0.85}>
      <View style={[styles.cardContainer, { transform: [{ scale }] }]}>
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
    </TouchableOpacity>
  );
};

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  cardContainer: {
    width: 130,
    height: 210,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: profileCardColor,
    padding: 10,
    margin: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 16,
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginTop: 5,
    marginBottom: 8,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
      },
      android: {
        elevation: 12,
      }
    })
  },
  cardImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 3,
    textAlign: 'center',
  },
  occupation: {
    fontSize: 11,
    fontWeight: '600',
    color: 'black',
    marginBottom: 4,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  description: {
    fontSize: 9,
    color: 'black',
    textAlign: 'center',
  },
});

export default ProfileCard;
