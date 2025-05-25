import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors, fontSizes } from '../components/theme';

export default function CountriesScreen({ countries = [] }) {
  if (countries.length === 0) {
    return <CenterMessage message="No countries saved!" />;
  }

  return (
    <FlatList
      data={countries}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.country}>{item.country}</Text>
          <Text style={styles.currency}>{item.currency}</Text>
        </View>
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
    borderBottomColor: colors.grey,
  },
  country: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: fontSizes.medium,
    color: colors.secondary,
  },
});
