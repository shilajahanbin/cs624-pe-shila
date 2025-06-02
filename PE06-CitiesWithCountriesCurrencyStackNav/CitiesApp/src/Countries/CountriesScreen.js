import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors, fontSizes } from '../components/theme';

export default function CountriesScreen({ navigation, countries = [], addCurrency }) {
  if (countries.length === 0) {
    return <CenterMessage message="No countries saved!" />;
  }

  const goToCountry = (country) => {
    navigation.navigate('Country', {
      country,
      currencies: country.currencies || [],
      addCurrency
    });
  };

  return (
    <FlatList
      data={countries}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => goToCountry(item)}>
          <View style={styles.item}>
            <Text style={styles.country}>{item.country}</Text>
            <Text style={styles.currency}>{item.currency}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  country: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: fontSizes.medium,
    color: colors.gray,
  },
});
