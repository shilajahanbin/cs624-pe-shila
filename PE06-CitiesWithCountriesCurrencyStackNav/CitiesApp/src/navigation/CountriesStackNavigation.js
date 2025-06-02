import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountriesScreen from '../Countries/CountriesScreen';
import Country from '../Countries/Country';
import { colors } from '../components/theme';

const Stack = createNativeStackNavigator();

export default function CountriesStackNavigation({ countries, addCurrency }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Countries"
        options={{ title: 'Countries' }}
        children={(props) => (
          <CountriesScreen
            {...props}
            countries={countries}
            addCurrency={addCurrency} // 👈 اینو اضافه کردیم
          />
        )}
      />
      <Stack.Screen
        name="Country"
        options={{ title: 'Country' }}
        children={(props) => (
          <Country
            {...props}
            addCurrency={addCurrency} // 👈 اینم اضافه کردیم
          />
        )}
      />
    </Stack.Navigator>
  );
}
