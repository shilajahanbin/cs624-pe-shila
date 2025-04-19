# Input
The user is prompted to enter their favorite course using a TextInput field at the top of the screen. The field displays a placeholder text "ex. CS624" and stores the user's input in a state variable.

# Process
The mobile app is developed using React Native and Expo. It uses an arrow function as the main component (`IndexScreen`) and includes core components such as View, Text, ScrollView, Image, TextInput, and StyleSheet. Internal styles are used to format and style the layout. The screen is scrollable, and the course sections (Core Requirements, Depth of Study, and Capstone) are displayed with section titles highlighted using background colors. The list of courses is rendered using an array and the `map()` function.

# Output
The app displays:
- An icon image at the top
- A TextInput field for the user's favorite course
- A scrollable screen with:
  - Core Requirements (24 credits) – list of 8 courses
  - Depth of Study (6 credits) – list of 2 courses
  - Capstone (3 credits) – 1 course

The user sees their favorite course displayed in real-time and the rest of the courses organized by category with bold section headers and visual styling.
