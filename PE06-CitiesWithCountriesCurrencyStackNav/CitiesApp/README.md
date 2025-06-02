# Input  
This mobile app allows users to interact with four tabs: CitiesNav, AddCity, CountriesNav, and AddCountry. In **AddCity**, users type a city name and its corresponding country to create a new city. In **AddCountry**, they can add a new country along with a primary currency. Through **CountriesNav**, users can select a country and add multiple currencies to it, including descriptions. In **CitiesNav**, tapping on a city allows users to add locations to it. All inputs come from forms—TextInputs—and are triggered via a button press, such as "Add City" or "Add Currency."

# Process  
The app is built using React Native with bottom tabs and nested stack navigators for deeper navigation. It handles state using `this.state` inside the main App component and passes functions like `addCity`, `addCountry`, or `addCurrency` down as props. These functions update local state arrays holding cities and countries. Stack navigators manage transitions between list views and detail views (like going from the countries list to a specific country with currencies).

# Output  
Each entry the user adds is reflected immediately in scrollable lists. If no data exists, the app shows friendly messages like "No saved cities!" or "No currencies added!" All content updates live without refreshing, giving a smooth and intuitive user experience.
