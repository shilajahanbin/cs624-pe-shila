import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from '../Cities/Cities';
import City from '../Cities/City';
import { colors } from '../components/theme';

const Stack = createNativeStackNavigator();

export default function CitiesStackNavigation({ cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Cities"
        options={{ title: 'Cities' }}
        children={(props) => (
          <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
      <Stack.Screen
        name="City"
        options={{ title: 'City' }}
        children={(props) => (
          <City {...props} cities={cities} addLocation={addLocation} />
        )}
      />
    </Stack.Navigator>
  );
}
