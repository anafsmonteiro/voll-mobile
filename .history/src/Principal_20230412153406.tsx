import { StyleSheet, Text, View } from 'react-native';

export default function Principal() {
  return (
    <View style={styles.container}>
      <Text>Tela principal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
