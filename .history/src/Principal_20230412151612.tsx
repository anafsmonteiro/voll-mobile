import { StyleSheet, Text, View } from 'react-native';

export default function Principal() {
  return (
    <View >
      <Text>Tela principal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
