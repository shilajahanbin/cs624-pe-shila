Input:
The user interacts with the AddCountry screen by typing a country name and its currency into two text input fields. Once both fields are filled, pressing the "Add Country" button triggers the submission. This is the only manual input in this version of the application.

Process:
When the "Add Country" button is pressed, the entered data is bundled into an object ({ country, currency }) and passed to the parent component via the addCountry prop. The app updates its internal state (this.state.countries) by appending the new entry to the existing list. The component re-renders to reflect the updated state. No external database or API is involved—state is fully managed locally.

Output:
The Countries screen renders a scrollable list of all saved countries along with their respective currencies. If no data is available, a centered message “No countries saved!” is shown. Otherwise, each country and its currency are displayed in a clean, readable format.