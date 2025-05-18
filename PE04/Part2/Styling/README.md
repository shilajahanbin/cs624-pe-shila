Input

The app initializes with six identical profile cards arranged in a two-column, three-row grid layout. Each card displays a user image, name, title, and description. The App.js component tracks which card is currently expanded using a state variable expandedIndex. Users can tap any card to interact with it.

Process

When a card is tapped, the onPress handler is triggered and updates the expandedIndex state. Each ProfileCard component receives a prop indicating whether it should appear expanded or collapsed. Based on that prop, the card scales using a React Native transform: scale style. Expanded cards scale to 1.25, while collapsed ones scale to 0.85. Additionally, styling includes elevation and shadow for platform-specific drop shadows.

Output

The app renders six stylized, responsive profile cards. When tapped, only the selected card enlarges while others remain unchanged in size. This creates an intuitive UI experience with clean layout behavior and clear user feedback on interaction