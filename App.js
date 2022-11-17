import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import HeaderLarge from './src/components/HeaderLarge/HeaderLarge';
import Loader from './src/components/Loader/Loader';
import Contact from './src/pages/Contact/Contact';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import LostPass from './src/pages/Lostpass/Lostpass';
import Profile from './src/pages/Profile/Profile'
import SearchCandidats from './src/pages/SearchCandidats/SearchCandidats';

export default function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  if (loading) return <Loader />

  return (
    <NativeRouter>
      <HeaderLarge />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/lostpass" element={<LostPass />} />
        <Route exact path="/searchcandidats" element={<SearchCandidats />} />
      </Routes>

      <StatusBar backgroundColor="#003147" />

      <Footer />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
