import { StyleSheet, Text, View } from 'react-native';

export default function Cases() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here is the view of all cases in your Stasis portal.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
