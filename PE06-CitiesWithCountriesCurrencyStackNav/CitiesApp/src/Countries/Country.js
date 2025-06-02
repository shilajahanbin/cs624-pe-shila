import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { colors, fontSizes } from '../components/theme';
import CenterMessage from '../components/CenterMessage';

export default function Country({ route }) {
  const { country, currencies, addCurrency } = route.params;

  const [name, setName] = useState('');
  const [info, setInfo] = useState('');

  const handleAdd = () => {
    if (!name || !info) return;
    const currency = { name, info };
    addCurrency(currency, country);
    setName('');
    setInfo('');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[!currencies.length && { flex: 1 }]}>
        <View style={[!currencies.length && { justifyContent: 'center', flex: 1 }]}>
          {!currencies.length && <CenterMessage message="No currencies added!" />}
          {currencies.map((currency, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.currencyName}>{currency.name}</Text>
              <Text style={styles.currencyInfo}>{currency.info}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Currency name"
        placeholderTextColor="white"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.input2]}
        placeholder="Currency info"
        placeholderTextColor="white"
        value={info}
        onChangeText={setInfo}
      />
      <TouchableOpacity onPress={handleAdd}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Currency</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  currencyName: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  currencyInfo: {
    color: 'rgba(0,0,0,0.6)',
    fontSize: fontSizes.medium,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: 104,
    left: 0,
    right: 0,
  },
  input2: {
    bottom: 52,
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: fontSizes.medium,
  },
});
