import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Principal() {
  return (
    <View style={styles.container}>
      <Text>Tela principal!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
