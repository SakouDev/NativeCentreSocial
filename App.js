import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import HeaderLarge from './src/components/HeaderLarge/HeaderLarge';
import Loader from './src/components/Loader/Loader';

export default function App() {

  const [loading, setLoading] = useState(false)

  if (loading) return <Loader />

  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <HeaderLarge/>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar
        backgroundColor="#003147"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
