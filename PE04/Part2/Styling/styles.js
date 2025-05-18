import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // وسط عمودی
    alignItems: 'center',     // وسط افقی
    backgroundColor: '#ededed',
  },
  countContainer: {
    marginTop: 20,
  },
  countText: {
    color: 'red',
  },
});

const buttons = StyleSheet.create({
  primary: {
    width: 250,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export { styles, buttons };
