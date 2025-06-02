import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

import CitiesStackNavigation from './src/navigation/CitiesStackNavigation';
import CountriesStackNavigation from './src/navigation/CountriesStackNavigation';
import AddCity from './src/AddCity/AddCity';
import AddCountryScreen from './src/AddCountry/AddCountryScreen';
import { colors } from './src/components/theme';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, { ...city, locations: [] }],
    }));
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    const updatedCity = {
      ...this.state.cities[index],
      locations: [...this.state.cities[index].locations, location],
    };
    const cities = [
      ...this.state.cities.slice(0, index),
      updatedCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({ cities });
  };

  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, { ...country, currencies: [] }],
    }));
  };

  addCurrency = (currency, country) => {
    const index = this.state.countries.findIndex((item) => item.country === country.country);
    const updatedCountry = {
      ...this.state.countries[index],
      currencies: [...this.state.countries[index].currencies, currency],
    };
    const countries = [
      ...this.state.countries.slice(0, index),
      updatedCountry,
      ...this.state.countries.slice(index + 1),
    ];
    this.setState({ countries });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: colors.primary,
          }}
        >
          <Tab.Screen
            name="CitiesNav"
            children={(props) => (
              <CitiesStackNavigation
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="AddCity"
            children={(props) => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
              />
            )}
          />
          <Tab.Screen
            name="CountriesNav"
            children={(props) => (
              <CountriesStackNavigation
                {...props}
                countries={this.state.countries}
                addCurrency={this.addCurrency}
              />
            )}
          />
          <Tab.Screen
            name="AddCountry"
            children={(props) => (
              <AddCountryScreen {...props} addCountry={this.addCountry} />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
