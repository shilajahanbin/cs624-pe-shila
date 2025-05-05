import { View, Text } from 'react-native';

export default function InputScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Input Screen
      </Text>
    </View>
  );
}
