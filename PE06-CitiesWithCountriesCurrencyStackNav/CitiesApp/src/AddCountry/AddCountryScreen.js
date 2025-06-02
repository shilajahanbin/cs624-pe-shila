import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fontSizes } from '../components/theme';

export default class AddCountryScreen extends React.Component {
  state = {
    country: '',
    currency: '',
  };

  handleAdd = () => {
    const { country, currency } = this.state;
    if (country && currency) {
      this.props.addCountry({ country, currency });
      this.setState({ country: '', currency: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Countries</Text>
        <TextInput
          style={styles.input}
          placeholder="Country Name"
          placeholderTextColor="#aaa"
          value={this.state.country}
          onChangeText={(text) => this.setState({ country: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Currency"
          placeholderTextColor="#aaa"
          value={this.state.currency}
          onChangeText={(text) => this.setState({ currency: text })}
        />
        <TouchableOpacity onPress={this.handleAdd}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    justifyContent: 'flext-start',
  },
  heading: {
    fontSize: 36,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 16,
    padding: 10,
    fontSize: fontSizes.medium,
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: fontSizes.medium,
  },
});
