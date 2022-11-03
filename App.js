import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Loader from './src/components/Loader/Loader';

export default function App() {

  const [loading, setLoading] = useState(false)

  if (loading) return <Loader setLoading={setLoading}/>

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* Pressable temporaire pour les essaies. */}
      <Pressable onPress={() => setLoading(true)}>
        <Text>SetLoading True</Text>
      </Pressable>
      <StatusBar style="auto" />
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
