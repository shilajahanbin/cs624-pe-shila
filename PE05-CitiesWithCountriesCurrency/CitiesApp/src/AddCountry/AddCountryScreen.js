import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { colors, fontSizes } from '../components/theme';

export default class AddCountryScreen extends Component {
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
        <Text style={styles.label}>Country Name</Text>
        <TextInput
          style={styles.input}
          value={this.state.country}
          onChangeText={(text) => this.setState({ country: text })}
        />
        <Text style={styles.label}>Currency</Text>
        <TextInput
          style={styles.input}
          value={this.state.currency}
          onChangeText={(text) => this.setState({ currency: text })}
        />
        <Button title="Add Country" onPress={this.handleAdd} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    padding: 8,
  },
});
